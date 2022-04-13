FROM node:17.9.0-slim

COPY ./ /home/node/
WORKDIR /home/node/
RUN chown node -R /home/node
USER node
RUN npm i 
CMD npm start
