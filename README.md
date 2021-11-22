# Homework - Mate Szabo
> User data management tool

Node version: v14.17.0<br />
Npm version: 6.14.13
* **[React](https://facebook.github.io/react/)**
* **[Redux](https://github.com/reduxjs/redux)**
* **[Webpack](https://webpack.js.org/)**
* **[Typescript](https://www.typescriptlang.org/)** 
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* **[SCSS](http://sass-lang.com/)** support
* **[Storybook](https://github.com/storybookjs/storybook)** stories
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
* [PostCss](https://github.com/postcss/postcss)

## Installation
`yarn install`

## Usage
*Development*

`yarn start:dev`

* Build app continuously (HMR enabled)
* App served: `http://localhost:8080`

*Production*

`yarn start:prod`

* Build app once (HMR disabled) to `/dist/`
* App served: `http://localhost:3000`

## Store data in real backend
If you would like to use the application in a real-life scenario 
and store the given information in a server, just simply go to
`./services/dataSync/index.ts` and change `SessionDataSync` to
`APIDataSync`. 

The abstract methods (`retrieveUserData`, `saveUserData`) are the same.

## Explanation
1. **Build the project**:
   First of all I had to choose the way how the application getting automatically built.
   For a bigger project in a real-life scenario I would use [Gatsby](https://www.gatsbyjs.com) or [Next.js](https://nextjs.org) because these
   tools are very efficient, fast and easy to configure. The reason I've decided to use pure
   [Webpack](https://webpack.js.org/) is that I wanted to show I'm able to configure a project from A to Z, writing the
   asset-managers from step-to-step
2. **React**: React is not a Framework, but a View layer and can be implemented in any other project (e.g: Angular2) and
   this is a huge advantage in case if we want to use this User-management tool in a bigger project (e.q. in a webshop).
3. **Styling**: My choice was **Scss**. As an alternative option I would use a **css-in-js** solution, like [Styled-components](https://styled-components.com/)
   which works perfectly with React, but for this project I wanted to show my Scss-related knowledge. For styled-components, actually
   we need only pure css3 and the library takes care the rest of the things...
4. The Project description did not mentioned but I've implemented [Storybook](https://github.com/storybookjs/storybook) also,
   because with this tool we can check every component one-by-one. It's very useful if we work together with designers and/or product owner.
5. **Redux**: I've used Redux (connected with SessionStorage) to share data between components. In this case, after filling the Form we want to
   see every given information on the Profile page. These information are coming from the Redux store. If we navigate back to the
   Form page, then we will still see the stored data. Another reason: Redux helps to re-render the component in case a change occures.
6. **Image responsiveness**: After the User selects his/her avatar the app creates 2 copy of it and resize them so later
when we want to show it again and someone visits it from a different size of viewport (mobile) we'll be able
to show the most appropriate image sizes.

## Scripts
Command | Description
--- | ---
`yarn start:dev` | Build and serve app in development mode, using hot-reload `http://localhost:8080`
`yarn start:prod` | Build and serve app in production mode. Destination: `/dist/`. After build: `http://localhost:3000`
`yarn build` | Build the app for production. Destination: `/dist/`
`yarn start` | Starts the app in dev mode. Shorthand for `yarn start-dev`
`yarn storybook` | Starts the storybook and serve it: `http://localhost:6006`

