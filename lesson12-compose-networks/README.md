# Урок 12. Сети в compose

Две свои сети: обычная front и изолированная back (internal: true),
плюс подключение к внешней сети my-proxy-net. Алиасы counter
и lesson12-web — дополнительные имена сервисов.

```bash
# внешнюю сеть создаём руками — compose ей только пользуется:
docker network create my-proxy-net

docker compose up -d
curl localhost:8080

# storage доступен соседям по back-сети:
docker compose exec app wget -qO- http://storage | head -1

# но у storage нет интернета (internal):
docker compose exec storage ping -c 1 -W 2 8.8.8.8

# alias и external-сеть:
docker run --rm --network lesson12-compose-networks_front \
  alpine wget -qO- http://counter:3000
docker run --rm --network my-proxy-net \
  alpine wget -qO- http://lesson12-web
```
