greenfield
==========

We use Less.js to generate our style sheets so please don't edit greenfield.css directly. 
* install less: "npm install -g less"
* generate styles: "lessc public/assets/css/less/greenfield.less public/assets/css/greenfield.css"
  
To run greenfield
* node app.js

In production be sure to set the correct port
* export PORT=80

Create a local config file
* Create a new config/app.json file. See config/app.json.sample as an example

To debug in develpoment
* npm install node-debug
* node-debug app.js
