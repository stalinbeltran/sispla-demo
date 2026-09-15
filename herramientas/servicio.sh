#!/bin/sh
# Lo que un lanzador necesita para dejar la demo corriendo en Linux, en un solo sitio.
#
#   sh herramientas/servicio.sh instalar   abre el puerto en ufw (pide sudo sin contraseña)
#   sh herramientas/servicio.sh servir     arranca el servidor en el puerto (para el ExecStart de systemd)
#   sh herramientas/servicio.sh url        imprime la dirección pública SOLO si ufw deja pasar el puerto
#                                          y el servidor contesta; si no, sale con 1 y dice por qué
#
# El puerto sale de PORT (8080 si no está): es el único sitio donde se decide.
# SISPLA_SECO=1 imprime la orden sin ejecutarla. La orden se imprime siempre, antes de hacerla.
# Es /bin/sh a propósito (en Ubuntu, dash): nada de bash.
set -eu

MODO="${1:-}"
PUERTO="${PORT:-8080}"
RAIZ=$(cd "$(dirname "$0")/.." && pwd)

uso() { sed -n '2,8p' "$0" >&2; }

case "$MODO" in
  instalar) ORDEN="sudo -n ufw allow ${PUERTO}/tcp" ;;
  servir)   ORDEN="cd $RAIZ && exec node servidor.js $PUERTO" ;;
  url)      ORDEN="comprobar ufw y 127.0.0.1:${PUERTO}, y publicar http://<ip pública>:${PUERTO}/" ;;
  ""|-h|--help) uso; exit 2 ;;
  *) echo "modo desconocido: '$MODO'" >&2; uso; exit 2 ;;
esac

echo "servicio.sh $MODO -> $ORDEN" >&2
[ -z "${SISPLA_SECO:-}" ] || exit 0

case "$MODO" in
  instalar)
    sudo -n ufw allow "${PUERTO}/tcp"
    ;;
  servir)
    cd "$RAIZ" && exec node servidor.js "$PUERTO"
    ;;
  url)
    if command -v ufw >/dev/null 2>&1; then
      ESTADO=$(sudo -n ufw status 2>/dev/null || true)
      case "$ESTADO" in
        *inactive*) ;;   # sin cortafuegos activo no hay nada que abrir
        *) printf '%s\n' "$ESTADO" | grep -q "^${PUERTO}/tcp " || {
             echo "ufw no deja pasar el ${PUERTO}/tcp. Ábrelo:  sh herramientas/servicio.sh instalar" >&2; exit 1; } ;;
      esac
    fi
    curl -fsS -o /dev/null --max-time 5 "http://127.0.0.1:${PUERTO}/api/salud" || {
      echo "nadie contesta en :${PUERTO}. ¿Está corriendo?  sh herramientas/servicio.sh servir" >&2; exit 1; }
    IP=$(curl -fsS --max-time 5 http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address 2>/dev/null || true)
    [ -n "$IP" ] || { echo "no sé la IP pública (los metadatos de DigitalOcean no contestan)" >&2; exit 1; }
    echo "http://${IP}:${PUERTO}/"
    ;;
esac
