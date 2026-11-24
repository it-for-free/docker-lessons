# Урок 14. Итоговый PHP-проект

Капстоун курса: nginx + php-fpm + postgres в стиле рабочих проектов —
свой Dockerfile с расширением и composer, код через bind mount,
две сети (front и internal back), adminer рядом.

```bash
docker compose up -d --build
curl localhost:8080

# правки кода не требуют пересборки — код подключён томом:
#   поменяли src/index.php -> refresh

docker compose exec app composer --version
```

Файлы:

- `docker-compose.yml` — app, nginx, db (internal-сеть), adminer
- `docker/Dockerfile` — php:fpm-alpine, pdo_pgsql, composer (COPY --from)
- `nginx.conf` — fastcgi на `app:9000`
- `src/index.php` — счётчик на PDO/PostgreSQL
