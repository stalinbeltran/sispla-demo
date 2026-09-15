#!/bin/sh
# Que cada modo de servicio.sh produzca SU orden, que uno desconocido se niegue, y que el puerto
# venga de PORT. Usa el modo seco: no toca ufw, no arranca nada, no pregunta a ningún metadato.
#
#   sh herramientas/probar-servicio.sh
set -u
S=$(dirname "$0")/servicio.sh
fallos=0
caso() {  # nombre, esperado(exit), contiene(texto en stderr), modo...
  nombre=$1; esperado=$2; texto=$3; shift 3
  salida=$(SISPLA_SECO=1 sh "$S" "$@" 2>&1 >/dev/null); rc=$?
  if [ "$rc" = "$esperado" ] && { [ -z "$texto" ] || printf '%s' "$salida" | grep -q -- "$texto"; }; then
    echo "  ok     $nombre"
  else
    echo "  FALLO  $nombre  -> exit $rc: $(printf '%s' "$salida" | head -1)"; fallos=$((fallos + 1))
  fi
}
caso "instalar abre el 8080 en ufw"          0 "ufw allow 8080/tcp"        instalar
caso "servir arranca node en el 8080"        0 "exec node servidor.js 8080" servir
caso "url publica en el 8080"                0 "8080/"                     url
PORT=9000 caso "PORT manda sobre el 8080"    0 "ufw allow 9000/tcp"        instalar
caso "sin modo: se niega"                    2 ""
caso "modo desconocido: se niega"            2 "modo desconocido"          borrar
[ "$fallos" = 0 ] && echo "6/6 pasan" || echo "$((6 - fallos))/6 pasan"
exit $fallos
