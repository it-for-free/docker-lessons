# docker-lessons

Учебные примеры к курсу «Docker с нуля» на сайте fkn.ktu10.com:
https://fkn.ktu10.com/?q=node/10406

## Как заниматься

Каждая папка `lessonNN-*` — самостоятельный пример одного урока.
Зайдите в папку урока и запускайте команды, например:

```bash
cd lesson04-first-dockerfile
docker build -t lesson04 .
docker run --rm lesson04
```

Уроки 0–3 проходят без файлов — только команды в терминале.

## Уроки

0. (без папки) — зачем Docker: контейнеры и «у меня работало», образ, слой, реестр
1. (без папки) — установка и первый запуск: `hello-world`
2. (без папки) — образ и контейнер: жизненный цикл (`run`, `stop`, `rm`)
3. (без папки) — внутри контейнера: `exec`, `logs`, `inspect`
4. `lesson04-first-dockerfile` — первый Dockerfile: `FROM`, `COPY`, `CMD`
5. `lesson05-layers-cache` — слои образа и кэш сборки
6. `lesson06-instructions` — инструкции: `RUN`, `WORKDIR`, `ENV`, `ARG`, `ENTRYPOINT`, `.dockerignore`
7. `lesson07-npm-cache` — кэш зависимостей: `npm install` и `--mount=type=cache`
8. `lesson08-volumes` — файлы и тома: bind mount, именованный том, анонимный том
9. `lesson09-networks` — сети контейнеров: общение по имени, публикация портов
10. `lesson10-first-compose` — первый `docker-compose.yml`
11. `lesson11-compose-details` — compose подробнее: `build`, `environment`, `depends_on`, `command`
12. `lesson12-compose-networks` — сети в compose: `internal` и `external` сети
13. `lesson13-postgres` — база данных в compose: postgres, `initdb.d`, adminer
14. `lesson14-php-project` — итоговый проект: nginx + php-fpm + postgres
15. `lesson15-makefile` — Makefile-обёртки над docker compose
