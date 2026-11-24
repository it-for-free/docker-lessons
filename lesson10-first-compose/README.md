# Урок 10. Первый docker-compose.yml

Два сервиса одной командой: nginx проксирует запросы на счётчик
посещений (приложение из урока 8), общаясь с ним по имени в общей сети.

```bash
docker compose up -d
docker compose ps
curl localhost:8080

docker compose logs
docker compose down      # том с данными переживёт
docker compose down -v   # а так — нет (осторожно!)
```

Файлы:

- `docker-compose.yml` — два сервиса (app собирается из Dockerfile,
  nginx берётся готовый), именованный том и проброс порта
- `nginx.conf` — проксирует `/` на `http://app:3000` (DNS из урока 9)
- `app.js`, `package.json`, `Dockerfile` — счётчик из урока 8
