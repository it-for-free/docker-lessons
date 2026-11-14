# Урок 6. Инструкции Dockerfile

RUN, WORKDIR, ENV, ARG на одном примере: приложение, которому нужен
пакет jq, читает данные из JSON и печатает переменные окружения.

```bash
docker build -t lesson06 .
docker run --rm lesson06

# переменная сборки:
docker build --build-arg APP_VERSION=2.0 -t lesson06-v2 .
docker run --rm lesson06-v2
```

Файлы:

- `Dockerfile` — RUN, WORKDIR, COPY, ARG, ENV, CMD
- `app.sh` — скрипт-приложение
- `data.json` — данные для jq
- `.dockerignore` — что не отправлять в контекст сборки
