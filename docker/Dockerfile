FROM node:14-bullseye

ARG VERSION

RUN git clone --depth 1 --branch ${VERSION} https://github.com/nikeee/edotor.net.git edotor
WORKDIR /edotor

# Add the contents of the samples folder, overwriting what is in the repo
ADD samples /edotor/src/samples

RUN npm install
RUN npm install -g serve
RUN npm run build:prod

# EXPOSE 3000
CMD ["serve", "-s", "dist"]