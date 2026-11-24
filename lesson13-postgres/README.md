# Урок 13. База данных в compose

Счётчик посещений переезжает с файла в PostgreSQL: таблицу создаёт
initdb-скрипт, данные живут в томе, смотреть базу можно через adminer.

```bash
docker compose up -d
docker compose logs app        # ожидание базы, затем «на связи»
curl localhost:3000

# админка: http://localhost:8080 (PostgreSQL, сервер db)

# данные в томе — переживают down:
docker compose down && docker compose up -d

# psql прямо в контейнере базы:
docker compose exec db psql -U lesson13 -d lesson13 \
  -c 'SELECT count(*) FROM visits;'
```

Файлы:

- `docker-compose.yml` — postgres (env + том + initdb), app, adminer
- `initdb/01-schema.sql` — схема, выполняется при первом старте тома
- `app.js` — счётчик на postgres с ожиданием готовности базы
