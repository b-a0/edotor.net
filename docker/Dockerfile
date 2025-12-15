FROM node:25

ARG VERSION

RUN git clone --depth 1 --branch ${VERSION} https://github.com/nikeee/edotor.net.git edotor
WORKDIR /edotor

# Add the contents of the samples folder, overwriting what is in the repo
ADD samples /edotor/src/samples

RUN npm ci
RUN npm run build

# EXPOSE 3000
CMD ["npm", "run", "start"]