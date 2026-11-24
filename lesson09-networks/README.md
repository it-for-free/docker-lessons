# Урок 9. Сети контейнеров

Демо урока целиком на командах docker — файлов тут почти нет,
`index.html` нужен для эксперимента с host.docker.internal.

```bash
# пользовательская сеть и DNS по имени:
docker network create lesson09net
docker run -d --name web --network lesson09net nginx
docker run --rm --network lesson09net alpine wget -qO- http://web

# сервис на хосте + обращение из контейнера:
python3 -m http.server 9999
docker run --rm --add-host=host.docker.internal:host-gateway \
  alpine wget -qO- http://host.docker.internal:9999
```
