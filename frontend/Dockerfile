# Dockerfile

# 1. Стадия сборки
FROM node:14-alpine AS builder

# Устанавливаем git и инструменты для сборки gifsicle из исходников
RUN apk add --no-cache \
      git \
      build-base \
      autoconf \
      automake \
      libtool \
      pkgconfig \
      m4 \
      giflib-dev

WORKDIR /app

# Клонируем репозиторий и переходим в папку client
RUN git clone https://github.com/IceSlam/booksc-js.git .
WORKDIR /app/frontend

# Устанавливаем зависимости и собираем проект
RUN npm install
RUN npm run build


# 2. Стадия рантайма
FROM node:14-alpine

WORKDIR /app

# Копируем из билдера только артефакты для запуска
COPY --from=builder /app/frontend/.nuxt ./.nuxt
COPY --from=builder /app/frontend/static ./static
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/frontend/nuxt.config.js ./nuxt.config.js
COPY --from=builder /app/frontend/node_modules ./node_modules

# Открываем порт, объявляем production-режим и запускаем
EXPOSE 3000
ENV NODE_ENV=development
CMD ["npm", "run", "start"]
