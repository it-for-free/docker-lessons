# Урок 4. Первый Dockerfile

Минимальный образ: базовый Alpine, скопированный скрипт и команда запуска.

```bash
docker build -t lesson04 .
docker run --rm lesson04
```

Файлы:

- `Dockerfile` — три инструкции: `FROM`, `COPY`, `CMD`
- `app.sh` — скрипт-«приложение», станет главным процессом контейнера
