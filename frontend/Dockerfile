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
WORKDIR /app/client

# Устанавливаем зависимости и собираем проект
RUN npm install
RUN npm run build


# 2. Стадия рантайма
FROM node:14-alpine

WORKDIR /app

# Копируем из билдера только артефакты для запуска
COPY --from=builder /app/client/.nuxt ./.nuxt
COPY --from=builder /app/client/static ./static
COPY --from=builder /app/client/package.json ./package.json
COPY --from=builder /app/client/nuxt.config.js ./nuxt.config.js
COPY --from=builder /app/client/node_modules ./node_modules

# Открываем порт, объявляем production-режим и запускаем
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
