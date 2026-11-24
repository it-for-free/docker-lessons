# Обёртки над docker compose — как в рабочих проектах

about:
	@echo "make docker.start.all   - поднять проект"
	@echo "make docker.stop.all    - остановить контейнеры (том жив)"
	@echo "make docker.rebuild.all - пересобрать образы и перезапустить"
	@echo "make ps                 - статус сервисов"
	@echo "make logs               - логи сервисов (Ctrl+C — выход)"
	@echo "make sh.app             - терминал внутри php-контейнера"
	@echo "make sh.db              - терминал внутри контейнера базы"

docker.start.all:
	@echo "Поднимаю проект..."
	docker compose up -d
	@echo "Приложение: http://localhost:8080"
	@echo "Adminer:    http://localhost:8081"

docker.stop.all:
	docker compose stop

docker.restart.all: docker.stop.all docker.start.all

docker.rebuild.all:
	docker compose up -d --build

ps:
	docker compose ps

logs:
	docker compose logs -f --tail=20

sh.app:
	docker compose exec app sh

sh.db:
	docker compose exec db sh
