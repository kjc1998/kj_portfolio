FROM node:latest

RUN apt-get update && apt-get install -y \
    nginx git
COPY nginx.conf /etc/nginx/

WORKDIR /portfolio
RUN git clone https://github.com/kjc1998/kj_portfolio.git .
RUN npm install && npm audit fix --force
RUN npm run build

EXPOSE 80
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]