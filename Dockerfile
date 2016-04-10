FROM ubuntu:14.04

MAINTAINER Fran Rios fcojriosbello@gmail.com

# It's necessary to avoid some problems:
# debconf: unable to initialize frontend: Dialog
ENV DEBIAN_FRONTEND noninteractive

# Install Nodejs...
RUN apt-get update && apt-get install -y nodejs npm

# Copy app to /src
COPY . /src

# Install app and dependencies into /src
RUN cd /src; npm install

#Show in our container
EXPOSE 8080

#Run the app
CMD cd /src && nodejs ./index.js
