FROM node:18.16.0-alpine

# Install dependencies
# RUN apt-get update && apt-get install libvips-dev -y

# Node Environment
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Working Directory
WORKDIR /opt/

# Copy Files
COPY ./package*.json ./

# Path: strapiapp\Dockerfile
ENV PATH /opt/node_modules/.bin:$PATH

# Install Dependencies
RUN npm install

# Install MySQL Client
RUN npm install mysql --save

# Working Directory for production
WORKDIR /opt/app

# Copy Files for Strapi production
COPY . .

# Build Strapi
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "develop"]