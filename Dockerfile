# Utiliser une image de base officielle pour Node.js 18
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le répertoire de travail
COPY . .

# Compiler l'application pour la production
RUN npm run build

# Exposer le port sur lequel l'application sera disponible
EXPOSE 3000

# Commande pour exécuter l'application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
