FROM alpine:3.20

RUN apk add --no-cache jq

WORKDIR /app

COPY data.json .
COPY app.sh .

ARG APP_VERSION=1.0
ENV APP_VERSION=$APP_VERSION
ENV APP_NAME=lesson06

CMD ["sh", "app.sh"]
