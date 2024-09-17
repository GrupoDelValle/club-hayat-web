FROM --platform=linux/amd64 node:18-alpine as deps
WORKDIR /app

COPY package*.json .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build


FROM --platform=linux/amd64 nginx:stable-alpine as production
COPY --from=deps /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]