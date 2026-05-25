#!/usr/bin/env bash
# Start a local preview server for Summit & Shore
set -e
cd "$(dirname "$0")"

PORT=8080
if lsof -i ":$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "Port $PORT is already in use."
  echo "If the site still won't load, stop the other process or try: python3 -m http.server 5500"
  URL="http://127.0.0.1:$PORT/"
else
  echo "Starting server on http://127.0.0.1:$PORT/"
  python3 -m http.server "$PORT" &
  sleep 0.5
  URL="http://127.0.0.1:$PORT/"
fi

echo "Open this URL in your browser (use http, not https):"
echo "  $URL"
open "$URL" 2>/dev/null || true
wait
