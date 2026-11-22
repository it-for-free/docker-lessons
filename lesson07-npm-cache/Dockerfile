FROM node:22-alpine

WORKDIR /app

# редкое: манифест зависимостей
COPY package.json ./

# тяжёлый слой установки (с кэш-маунтом скачиваний npm)
RUN --mount=type=cache,target=/root/.npm npm install

# частое: код приложения
COPY . .

CMD ["node", "app.js"]
