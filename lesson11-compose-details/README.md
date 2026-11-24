# Урок 11. Compose подробнее

Тот же проект «nginx + счётчик», но с настройками: переменные
окружения, .env, container_name, restart и пересборка одного сервиса.

```bash
docker compose up -d
curl localhost:8080

# порт теперь в .env — меняем без правки yml:
#   WEB_PORT=8081

# пересобрать и перезапустить только app:
docker compose up -d --build app
```

Файлы:

- `docker-compose.yml` — environment, ${VAR} подстановки, container_name,
  restart, depends_on
- `.env` — значения для подстановок (GREETING, WEB_PORT)
- `app.js` — счётчик с настраиваемым приветствием через GREETING
