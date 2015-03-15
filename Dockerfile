# VERSION 0.2
# DOCKER-VERSION 0.3.4
# To build:
# 1. Install docker (http://docker.io)
# 2. Checkout source: https://github.com/code4hk/budget-calculator.git
# 3. Build container: docker build .
FROM debian:wheezy
# Install Node.js, npm, bower
RUN echo "deb http://http.debian.net/debian wheezy-backports main" > /etc/apt/sources.list.d/wheezy-backports.list
RUN apt-get update && apt-get install -y curl git nodejs
RUN apt-get install -y bzip2
RUN update-alternatives --install /usr/bin/node nodejs /usr/bin/nodejs 100
RUN curl https://www.npmjs.com/install.sh | sh
RUN npm install -g bower
# App
ADD . /budget-calculator
# Install app dependencies
RUN cd /budget-calculator && npm install && bower install --allow-root
EXPOSE 8004
WORKDIR /budget-calculator/public
CMD ["node", "../scripts/web-server.js"]
