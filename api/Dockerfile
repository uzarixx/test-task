FROM node:18.12-alpine as build

WORKDIR /app

COPY . ./

RUN npm ci && npm run build

FROM node:18.5-alpine
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/dist ./

RUN npm ci --omit=dev

ENTRYPOINT ["node"]
CMD ["-r", "module-alias/register", "./", "--env=production"]