# test-deploy-app
Test any deployment with this simple react project

## Clone and run application

1. Clone repository
2. Navigate into the directory of the project by running the command `cd test-deploy-app`
3. In a terminal, run the following commands

```bash
$ npm install
$ cd test-deploy-app
$ npm start
```

4. A browser will open and you can see the application running
5. Use this project to test a deployment pipeline as a Node.js application

## Run Cyrpess frontend tests

1. Navigate into the project directory `cd test-deploy-app/test-deploy-app`
2. Next, run `npx serve` to start the development server
3. Then in a new terminal, run `npm run e2e` to run the Cypress tests
4. A new browser window will open and you can click on the test file to run the test
5. Click `Stop` to stop the test run and close the browser window
6. Use CTRL+C to stop the development server and the test connection in both open terminals

## Build & Run in Docker
In a new terminal, run the following commands:
```bash
$ cd ./test-deploy-app/test-deploy-app
$ docker build -t test-deploy-app:dev .
$ docker run \                         
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
   test-deploy-app:dev
```