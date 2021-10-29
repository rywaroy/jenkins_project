# FROM nginx:1.15-alpine
# COPY dist /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html


FROM node:13-alpine
COPY dist /dist
RUN npm install pm2 -g
RUN npm install koa koa2-proxy-middleware koa-static koa-body
COPY ./server.js ./server.js
EXPOSE 8088

CMD ["pm2-runtime", "start", "server.js"]