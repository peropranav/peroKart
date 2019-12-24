# peroKart

A shopping cart on MongoDb, Angular 6 and nodeJs

## How to Run
- clone this repo
- unzip it
- cd angularClient
- npm install
- cd ../nodeServer
- npm install
- cd ..
- import the database attached
- cd angularClient
- ng serve
- cd nodeServer
- node server/server.js
- open localhost:4200

## Run build version
- clone this repo
- unzip it
- cd angularClient
- ng build
- cd ../nodeSever
- npm install
- cd ../peroKartAppDB
- mongorestore -d myEkartAppDB myEkartAppDB/
- node server/server.js
- open localhost:3000

