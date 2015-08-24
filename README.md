greenfield
==========

If using newer version of node, use nvm to install node v0.10.40:
* `nvm install 0.10.40`

Run npm install:
* `npm install`

We use Less.js to generate our style sheets so please don't edit greenfield.css directly.
* install less: `npm install -g less`
* generate styles: `lessc public/assets/css/less/greenfield.less public/assets/css/greenfield.css`

To run greenfield
* `node app.js`

In production be sure to set the correct port
* `export PORT=80`

Create a local config file
* Create a new config/app.json file. See config/app.json.sample as an example

To debug in development
* `npm install node-debug`
* `node-debug app.js`

### Deployment

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
