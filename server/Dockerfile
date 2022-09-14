FROM node:latest
WORKDIR ./app
COPY ./package.json ./
COPY prisma ./prisma/
RUN npm i
RUN npx prisma generate
RUN npx prisma migrate dev
COPY ./ ./
RUN npm run test
RUN npm run build
EXPOSE 3003
CMD ["npm", "start"]