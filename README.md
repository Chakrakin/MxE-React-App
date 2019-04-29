# Single Spa portal example

Example of how using single-spa you can create a micro service front-end and enable multiple 
applications to work in concert in a unified experience.

## Technologies
1. [single-spa](https://single-spa.js.org/)
2. [SystemJS](https://github.com/systemjs/systemjs)

## Versions of node/npm
Node v8.10.0
npm 6.1.0

## Installation and setup
1. Clone the repo
2. Run `npm run install-all`
3. run `npm start`
4. Open running code at `http://localhost:8233/`

## Current applications
1. People (written in react)
2. Planets (written in vue)
3. Navigation (written in react)

## Current Services
1. fetchWithCache

# Why `!sofe`
I'm using webpack (a static module bundler) to build each application for our micro-frontend approach. Webpack requires
access to everything it needs to include in the bundle at build time. This means when an app that imports a service,
for example planets importing the fetchWithCache service, webpack will try to bundle the service into the planets bundle.
The built in way to avoid webpack doing this is [webpack externals](https://webpack.js.org/configuration/externals/), 
using externals works really well but to avoid having to include a regex for each service I'm using the postfix to signal 
to webpack (and developers) that the import is another micro-app/service/front-end. Sofe for Service Oriented Front-End, 
it isn't required if you would rather include a different postfix or none at all it should work, you'll just have to 
modify each webpack config for externals.
