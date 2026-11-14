#!/bin/sh
echo "Приложение: $APP_NAME, версия: $APP_VERSION"
echo -n "Из JSON: "
jq -r '.greeting' data.json
