# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM jhipster/jhipster:v6.0.0-beta.0
RUN mkdir /home/jhipster/function
WORKDIR /home/jhipster/function
COPY * ./

# Install production dependencies.
RUN npm ci

# Run the web service on container startup.
ENV PORT 8080
CMD [ "npm", "start" ]
