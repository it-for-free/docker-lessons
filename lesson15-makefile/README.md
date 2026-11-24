# Урок 15. Makefile-обёртки

Проект из урока 14 (nginx + php-fpm + postgres) управляется
короткими make-командами — как в наших рабочих проектах.

```bash
make about                # список команд
make docker.start.all     # поднять
curl localhost:8080
make logs                 # логи
make docker.stop.all      # остановить
make sh.app               # внутрь php-контейнера
```

Файлы — те же, что в lesson14-php-project (compose, Dockerfile,
nginx.conf, src/), плюс `Makefile` с обёртками.
