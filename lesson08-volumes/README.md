# Урок 8. Тома и файлы

Счётчик посещений показывает разницу между «данными в контейнере»
и данными в томах: bind mount, именованный том, анонимный том.

```bash
# данные умирают с контейнером:
docker run -d --name lesson08 -p 3000:3000 lesson08
curl localhost:3000
docker rm -f lesson08

# bind mount — данные в папке проекта:
docker run -d --name lesson08 -p 3000:3000 \
  -v $(pwd)/data:/app/data lesson08

# именованный том — данными управляет Docker:
docker run -d --name lesson08 -p 3000:3000 \
  -v lesson08data:/app/data lesson08
```

Файлы:

- `app.js` — счётчик посещений, пишет в `/app/data/visits.txt`
- `html/index.html` — страница для демо bind mount с nginx (`:ro`)
