# Netcode-Intralink

A Community local network React Web App

## Features

- View the news(Articles) of what is happening in a given Enterprise
- Chat Inbox or in Group with other fellow users
- Add Articles 
- Consult the Documentation
- Add Doc Articles
- Search Doc and Articles 

## Tech

### Front End

- [React](https://reactjs.org/) - JavaScript UI Library
- [React-Router](https://reacttraining.com/) - Routing
- [Styled Components](https://sass-lang.com/) - Styling
- [Jest](https://jestjs.io/) - JavaScript Testing Framework

### Back End

- [Express](https://expressjs.com/) - Web Framework for Node.js
- [PostgreSql](https://www.postgresql.org/) - Relational Database
- [Redis](https://redis.io/) - In-Memory Data Structure Store used for Authorization

## Team

- Project Lead - [Angelo](https://github.com/angeloDiepe)
- Front End Lead - [Angelo](https://github.com/angeloDiepe)
- Back End Lead - [Gaetan](https://github.com/Gaetan-M)
- Database Lead - [Cecile](https://github.com/cecilekkac)
- Designer/ Styling Lead - [Delphine](https://github.com/Delphi-943)
- Network Lead- [Meli](https://github.com/LoicMeli)

---

## Running Locally in Development Mode

To get started with the front end, fork the repository and run the following commands:

    npm install
    npm start
if permission issue found run with prefix sudo. Ex

    sudo npm install

## Building and Deploying in Production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Running Test in Development Mode

If you are the first time to start the tests, run the following command to ensure all related packages installed:

    npm install

To get started with Unit Test, run the following command:

    npm run test
