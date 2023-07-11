FROM node:16.14.2-alpine AS dependencies
RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm@8.2.0

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
RUN pnpm install

FROM dependencies AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:16.14.2-alpine as production
RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm@8.2.0
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public


EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]