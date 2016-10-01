# Geo musci band web application Overview

This project is created from a basic boilerplate for the MEAN stack ([MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com/), [AngularJS](https://angularjs.org/) and [Node.js](https://nodejs.org)) on [IBM Bluemix](http://bluemix.net).

Live Example: [https://geo-music.mybluemix.net/](https://geo-music.mybluemix.net/)

This application uses the [MongoDB experimental service](https://www.ng.bluemix.net/docs/#services/MongoDB/index.html#MongoDB) and [Node.js runtime](https://www.ng.bluemix.net/docs/starters/nodejs/index.html) on Bluemix.

#### Features
- Geo home: impressive and condensed page about the GEO mission displayed on a well visible place of the web-app available for any user
- About: impressive and condensed page about GEO band and musicians displayed on a well visible place of the web-app
- Events: visualisation possibility of the latest GEO events available for any user
- Our music: visualisation possibility of the latest GEO music collections on the web site available for registered users only. This is a rotected route for listening music that can only be accessed by authenticated users.
- Account, Register: Create, edit and delete user accounts
- Authentication with username/password
- Administration: data upload for Geo band administrator to upload new music, event and band related data.
- MVC project structure
- Bootstrap CSS framework & [Cosmo theme](https://bootswatch.com/cosmo/)
- HTTPS built-in if deployed to [Bluemix](#deploy-to-bluemix)
- [Mongoose](https://github.com/Automattic/mongoose) for MongoDB interactions.
- [PassportJS](http://passportjs.org) for authentication, with over 300 authentication strategies to pick from.

## Application Requirements
- [Node.js & NPM](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.org)
- [Cloud Foundry Command Line Tool](https://docs.cloudfoundry.org/devguide/installcf/)

## Getting Started
##### Local Application Development
1. Clone or download this repo onto your machine.
2. Install [application requirements](#application-requirements) if not done so already.
3. Open application directory in your terminal and run `npm install`
4. Rename `.env.example` file to `.env`.  Edit the contents as needed, at a minimum adding your own SESSION_SECRET.
5. Start up your local MongoDB server (typically just `mongod`, see docs [here](https://docs.mongodb.org/getting-started/shell/installation/))
6. Run `node server.js` to start your app
7. Open a browser to the link provided in the terminal prompt to view your app

Option 2 (deploy from your local machine):

1. Clone or download this repo onto your machine.
2. Open a terminal prompt to the directory of your application.
3. If you don't have a Bluemix account, [create a free one here](https://console.ng.bluemix.net/registration/).
4. Set your Cloud Foundry CLI tool's API endpoint to Bluemix: `cf api https://api.ng.bluemix.net `
5. Login to Bluemix via the command line: `cf login`
6. Create the MongoDB service on Bluemix: `cf create-service mongodb 100 mean-mongo`
7. Push your app to bluemix with `cf push`

#### Problems or Questions?
Find us on [Stack Overflow](https://stackoverflow.com/questions/tagged/bluemix) and tag your question with 'bluemix'.

## Critical Files & Folders

| File                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| [**manifest.yml**](./manifest.yml) | File that defines Bluemix deployment paramaters. [More info here](https://www.ng.bluemix.net/docs/manageapps/depapps.html#appmanifest)
| [**.env.example**](./.env.example) | Set custom [environment variables](https://en.wikipedia.org/wiki/Environment_variable) for your application. This is the proper way to store credentials and other sensitive values.
| [**server.js**](./server.js) | Main server file that the Node.js runtime uses. It contains all the server logic.
| [**/server**](./server) | Folder for files used by the Node.js server
| [/server/models/**user.model.js**](./server/models) | Model for storing users and other data in MongoDB
| [**/public**](./public) | Folder for files delivered to users, such as html and css files
| [/public/js/**app.js**](./public/js/app.js) | Angular application for manipulating and rendering data in browser



## Application
- **MongoDB** stores user account information and persists sessions (so that a server crash does not log out all users.)
- **Express** functions Node.js middleware to handle all HTTP requests and routing.
- **Angular** handles HTML templating and data manipulation.
- **Node.js** is the runtime for the application.

There is also generous commenting throughout the application which helps explain critical parts of the application.

## Troubleshooting
The primary source of debugging information for your Bluemix app is the logs. To see them, run the following command using the Cloud Foundry CLI:

  ```
  $ cf logs <application-name> --recent
  ```

If you are not sure what your application name is, use this command to print your application name(s):

  ```
  $ cf apps
  ```

For more detailed information on troubleshooting your application, see the [Troubleshooting section](https://www.ng.bluemix.net/docs/troubleshoot/tr.html) in the Bluemix documentation.
