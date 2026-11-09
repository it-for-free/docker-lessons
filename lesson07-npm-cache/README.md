# Урок 7. Кэш зависимостей: npm

Тут будут: `package.json` и `Dockerfile`, где `COPY package.json` идёт
отдельно до `npm install`, плюс кэш-маунт `--mount=type=cache` для `~/.npm` —
чтобы пересборка не качала зависимости заново.
