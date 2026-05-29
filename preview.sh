#!/usr/bin/env bash
# Start a local preview server for Summit & Shore
set -e
cd "$(dirname "$0")"

port_responds() {
  local port="$1"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 1 "http://127.0.0.1:${port}/" 2>/dev/null || echo "000")
  [[ "$code" == "200" ]]
}

pick_port() {
  local port
  for port in 8080 5500 3000 8888; do
    if lsof -i ":$port" -sTCP:LISTEN -t >/dev/null 2>&1; then
      if port_responds "$port"; then
        echo "$port"
        return 0
      fi
      echo "Port $port is in use but not serving this site (stale server?)." >&2
    else
      echo "$port"
      return 0
    fi
  done
  echo "No free port found. Stop other servers or run: python3 -m http.server 9000" >&2
  exit 1
}

PORT=$(pick_port)

if lsof -i ":$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "Site already running at http://127.0.0.1:${PORT}/"
else
  echo "Starting server at http://127.0.0.1:${PORT}/"
  echo "Press Ctrl+C to stop."
  python3 -m http.server "$PORT"
  exit 0
fi

URL="http://127.0.0.1:${PORT}/"
echo "Open in your browser (use http, not https):"
echo "  $URL"
open "$URL" 2>/dev/null || true
