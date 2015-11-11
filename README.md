# React Blog
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
* React and markdown is included from CDN, with local fallback

## Todo
- [X] make package private so it does not get pushed accidentally
- [X] revert code back, take post name from filename, just list without preview
- [ ] put static files into separate folder but copy them over in build phase
- [X] add markdown support
- [X] load articles from server
- [X] add fallback for all external libs
- [X] add react-route
- [X] update to react 0.14
- [ ] optimize the production build result with babel and minify and webpack built in https://webpack.github.io/docs/optimization.html
- [X] add react router from CDN https://cdnjs.com/libraries/react-router
- [X] get react browser plugin working
- [X] extract shared code
- [X] CSS build process and modules
- [ ] CSS styling
- [ ] deploy process -> replace .js with min.js
- [X] use eslint
- [ ] style lists and the text below images similar to medium.com




