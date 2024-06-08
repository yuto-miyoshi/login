# env for "ng build"
FROM node as build-platform

WORKDIR /app
COPY package*.json /app
RUN npm install

COPY . /app
RUN npm run build

# run proxy
FROM nginx

COPY --from=build-platform /app/dist/frontend/browser /usr/share/nginx/html
COPY /proxy/nginx.conf /etc/nginx/nginx.conf