FROM node:20-alpine3.19 as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:20-alpine3.19 as runner
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --prod
COPY --from=builder /app/build ./build
CMD [ "npm", "start" ]
