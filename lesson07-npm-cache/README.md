# Урок 7. Кэш зависимостей: npm

Два Dockerfile — наивный и правильный. Сравниваем, что происходит
с установкой зависимостей при правке кода.

```bash
# наивный вариант (для сравнения):
docker build -f Dockerfile.naive -t lesson07-naive .

# правильный вариант:
docker build -t lesson07 .
docker run -d --name lesson07 -p 3000:3000 lesson07
curl localhost:3000
docker rm -f lesson07
```

Файлы:

- `Dockerfile` — правильный порядок: package.json → npm install → код, плюс кэш-маунт `--mount=type=cache` для `~/.npm`
- `Dockerfile.naive` — COPY . . до установки: каждая правка кода переустанавливает зависимости
- `app.js`, `package.json` — мини-приложение на express
- `.dockerignore` — без него `COPY . .` тянет локальные `node_modules` в контекст
