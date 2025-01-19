#Устанавливаем образ
FROM node:18-slim

#Устанавливаем рабочую директорию
WORKDIR /usr/src/app

#Копируем файлы в контейнер
COPY package.json app.js ./

#Устанавливаем зависимости (только для продакшена)
RUN npm install --only=production

#Команда запуска приложения
CMD ["npm", "start"]
