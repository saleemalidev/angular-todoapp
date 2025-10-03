FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . . 

RUN npm run build -- --output-path=./dist/out --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist/out /usr/share/nginx/html

# Optional: Copy a custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]