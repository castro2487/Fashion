FROM node:18-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm i --ignore-scripts

FROM node:18-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build-storybook

FROM node:18-alpine as release
WORKDIR /app
COPY --from=builder /app/storybook-static ./
ENV NODE_ENV production

EXPOSE 8080
CMD ["npx", "http-server", "./"]
