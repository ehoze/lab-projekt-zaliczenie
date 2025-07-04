# Dockerfile dla aplikacji Node.js
FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików package.json
COPY package*.json ./

# Instalacja zależności
RUN npm ci --only=production

# Kopiowanie kodu aplikacji
COPY . .

# Eksponowanie portu
EXPOSE 3000

# Tworzenie użytkownika nieuprzywilejowanego
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeapp -u 1001

# Zmiana właściciela plików
RUN chown -R nodeapp:nodejs /app
USER nodeapp

# Komenda uruchomieniowa
CMD ["npm", "start"] 