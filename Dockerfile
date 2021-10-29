# FROM nginx:1.15-alpine
# COPY dist /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html


FROM node:13-alpine
COPY dist /dist
# RUN npm install pm2 -g
COPY ./server.js ./server.js
EXPOSE 8080

CMD ["npx", "pm2", "start", "server.js"]