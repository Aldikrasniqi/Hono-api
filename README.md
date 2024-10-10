# Setup on you machine

Make sure you have installed Node.js and npm.

## Install Dependencies
```
npm install
npm run dev
```
## Create Environment Variables File

Create a .env file in the root directory of your project.
This file will hold your environment variables. You can start with :

```
NODE_ENV=development
PORT=3000
```

## Set Up Environment Variables

I have used zod and dotenv to menage and validate env variables, You can modify into the following directory:

```
./src/env.ts
```

## Finally open server

```
open http://localhost:3000
```
