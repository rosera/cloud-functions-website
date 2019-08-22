FROM node:10

MAINTAINER Rich Rose "askrichardrose@gmail.com"

# Create a work directory
WORKDIR /usr/src/app

# Add packages
COPY package*.json ./

# Install dependencies
RUN npm install @google-cloud/functions-framework
RUN npm install pug 

# Bundle app source
COPY . .

# Export application PORT
EXPOSE 8080

# Create start command
CMD ["npm", "start"]
