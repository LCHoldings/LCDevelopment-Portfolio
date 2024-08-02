# use node 16 alpine image
FROM node:16-alpine

# create work directory in app folder
WORKDIR /workStudio

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY /studio/package.json /workStudio/
COPY /studio/package-lock.json /workStudio/

# install all depencies
RUN npm ci && npm cache clean --force

# copy all files to the work directory
ADD /app/. /workStudio

# build the project
RUN npm run build

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]