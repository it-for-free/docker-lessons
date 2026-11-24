FROM php:8.3-fpm-alpine

# расширение для работы с PostgreSQL
RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install pdo_pgsql

# composer — скопирован из отдельного образа (multi-stage)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/project
