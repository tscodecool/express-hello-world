FROM node
LABEL authors="xxxxx"

# update dependencies and install curl
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

COPY . .

# update each dependency in package.json to the latest version
RUN npm install\
    ncu -u \
    npm install

# If you are building your code for production
# npm ci will install dependecies from package-lock.json
RUN npm ci --only=production

# Bundle app source
COPY . /app

EXPOSE 5000

CMD [ "node", "index.js" ]
