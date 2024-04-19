FROM node:20
VOLUME ["text-utils"]
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm" "run" "start"]
