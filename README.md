# Joke app

This application can show you a joke. The opening page is sent from the server as HTML document through the default route ('/') with an HTTP request using a GET method.

[This is the link to the deployed version.](https://joke-code-server-gergokutu.herokuapp.com/)

## TECHNOLOGIES
- Javascript
- Node.js
- Express.js
- Heroku

## PROJECT SETUP

You can clone the remote git repository to your computer with the following command using your terminal:
git clone git@github.com:gergokutu/joke-coda.git

The previous command handles the necessary npm packages as well such as downloading Express.js.

You can run the server with 2 different commands:
- npm run start > uses "node index.js"
- npm run dev > uses "nodemon index.js"

Notes:
- Nodemon is practical for development because restarts the server after every saved changes. You do not to run again the "node index.js" command manually.
- Heroku always uses the 'npm run start' command
- The start script should be apple to run your server > use node to run the necessary file
- The package.json under the scripts section should consist > "start": "node index.js", (synthax of JSON)

## CI/CD

The CI/CD pipeline is built by Git - GitHub - Heroku integration.

If you want to deploy the same pipeline with your own Heroku account you should follow the following steps:
0. Push the repository to a new remote repository on your GitHub
1. Create a new app under your Heroku account
2. Connect your Heroku app with the GitHub repository
3. Enable auto deployement on master branch

Check package.json if you have the proper "start" script in it, because:
- Heroku always uses the 'npm run start' command
- The start script should be apple to run your server > use node to run the necessary file
- The package.json under the scripts section should consist > "start": "node index.js", (synthax of JSON)

## BRANCHING STRUCTURE
- master > deployed to Heroku, only features tested on development branch pulled here
- development > changes from feat/... branches pulled here
- feature > there are several feat/... branches to be able to work separately on different features 

## FEATURES
- user can choose from the predefined categories (find in index.js -> jokes object)
- user can choose their age (Adult vs Under 18)
- user can see the joke of the chosen category
- age control -> only adults can see the joke category of 'adult'

## ENDPOINTS...

| ENDPOINT | METHOD | DESCRIPTION |
| -------- | ------ | ------------------------- |
| '/' | get | Ask user input: age, joke category. After submit calls the '/jokes' endpoint|
| '/jokes' | get | Shows the proper joke |