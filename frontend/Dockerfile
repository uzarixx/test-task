FROM node:18.12-alpine as build

WORKDIR /app
COPY ./ .
RUN npm ci

ARG API_URL="http://localhost:5000"
ENV API_URL=$API_URL

RUN npm run build

FROM nginx:1.23.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
