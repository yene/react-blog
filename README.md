# React blog something

Small Blog in react, to learn react, that uses HTTP directory listing as index, no backend needed.


## Technology
* React.js
* Webpack
* ES2015


## Folders & Files
* /app contains the react code
* /build contains the generated version ready for deploy
* /app/index.jsx is our webpack starting point

## external dependencies
* React.js is included from CDN, with local fallback

## Questions & Goals
* How to add CSS to ES2015 modules, is there a nice way with webpack.
* Learn a few things that then can be ported to blog software hugo.
* How to copy static files with webpack
* What to render in React and what to hardcode in HTML? -> blog listing in react, rest html
* Should post preview use <article>?
* Where should I load the articles?
* How to set state in react+es2015, does it require a babel option? -> going stage 0 means we are very experimental
* are semicolons required in ES2015
* How to concatenate strings? {`/user/${user.id}`}

## Notes
Loading the content async will cause the components to update, the user will notice a flash on the page. It would be better if the whole page would wait for the content until it renders something.

## Todo
- [X] make package private so it does not get pushed accidentally
- [X] revert code back, take post name from filename, just list without preview
- [ ] put static files into separate folder but copy them over in build phase
- [X] add markdown support
- [X] load articles from server
- [ ] add fallback for all external libs
- [ ] setup linter
- [ ] add react-route
- [ ] update to react 0.14
- [ ] optimize the production build result with babel and minify
- [ ] add react router from CDN https://cdnjs.com/libraries/react-router
- [ ] get react browser plugin working

## Learned
* use constructor instead of getInitialState in ES2015, set the state directly
* adjacent JSX must be wrapped in one root tag
* The unminified version of React is "development" mode, and the minified version of React is "production" mode.

## links
* https://facebook.github.io/react/docs/jsx-in-depth.html
* http://ricostacruz.com/cheatsheets/react.html
