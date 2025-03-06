# Use Node.js to build the React app
FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies for the React app
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Run the build command to create a production build
RUN npm run build

# Use Nginx to serve static files
FROM nginx:stable-alpine as production-stage

# Copy build files from the build-stage to Nginx's default public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for serving static files
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
