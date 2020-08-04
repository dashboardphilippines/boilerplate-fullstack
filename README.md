# Fullstack Project Boilerplate Code

This boilerplate contains the common code of Dashboard Labs' fullstack stack which includes the following:

- Apollo GraphQL Service
- Express Server
- NextJS
- Material UI

This project also has configurations for deploying on Google Cloud Run through Google Cloud Build and is easily deployable on a service like Heroku.

## Why the suggestion to unify backend and frontend?

- Unify types in typescript (no need to update types on both repos)
- Singular build and deployment pipeline (lessens devops time)
- Singular setup for coding and managing issues
- Removes unnecessary NextJS configuration

## What do I need to learn to use this template?

- `npm install` installs all necessary dependencies
- `npm run dev` runs the server in DEV MODE
- `npm run build` builds the server
- `npm start` starts the server in PRODUCTION MODE

Server will be running on PORT 3000 unless otherwise specified (through the PORT environment variable).

## Where can I access my GraphQL endpoint? 

Go to `/graphql`. The GraphQL Playground is accessible on DEV mode only for security reasons.

## Project Setup

Once you're convinced, to use this boilerplate, click on the "Use this template" button on the repo page or click on <a href="https://github.com/dashboardphilippines/boilerplate-fullstack/generate">this link</a>.

## Installation for Code Quality Tools

This repository also contains the following features for proper code quality:

- <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a>

In addition, this repository also has a VS Code configuration to lint the code on each save and before each commit. Please install the following plugins above.
