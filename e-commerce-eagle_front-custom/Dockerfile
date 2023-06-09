FROM node:18-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm i --ignore-scripts

FROM node:18-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm config fix && npm run build

FROM node:18-alpine as release
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/utils ./utils
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static/

EXPOSE 3000
CMD ["npm", "run", "init:start"]
