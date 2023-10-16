FROM node:14-alpine as builder

# set the working dir for container

WORKDIR /user

# copy the json file first

COPY ./package.json /user
COPY ./package-lock.json /user

# install npm dependencies

RUN npm ci

# copy other project files
COPY . .

# build the folder
# RUN npm run build

EXPOSE 80

CMD ["npm","start","--port 80"]
