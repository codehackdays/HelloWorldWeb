FROM heroku/cedar:14

# Create app directory
RUN mkdir -p /app/user
WORKDIR /app/user

# Install app dependencies
COPY package.json /app/user
RUN npm install

# Bundle app source
COPY . /app/user

EXPOSE 8080
CMD [ "npm", "start" ]
