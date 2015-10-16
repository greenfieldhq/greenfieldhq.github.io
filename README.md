# greenfield

## Setup

```
# install node
nvm install 4

# Install dependencies
npm install

# Copy sample env file
cp .env.sample .env
```

## Development

To run the app locally:

```
npm start
```

## Debugging

To debug in development

* `npm install node-debug`
* `node-debug app.js`

### Deployment

In production be sure to set the correct port

* `export PORT=80`

Make sure you have ssh-copy-id installed:

* `brew install ssh-copy-id`

Log in with proper credentials:

* `ssh-copy-id *email*`
* `pwd: *password*`

Once logged in:

* `byobu`

Make sure you've pulled the latest changes from master:

* `git pull`

Run node to push changes to production:

* `node app.js`

To exit session:

* *ctrl+a*
* `d`
* `exit`
