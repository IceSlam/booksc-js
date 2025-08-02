FROM node:14

ENV APP_ROOT /app
ENV NODE_ENV development
ENV NUXT_ENV_APP_PORT 3000

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

RUN npm install

CMD ["npm", "run", "generate"]
