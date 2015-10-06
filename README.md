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

## Notes
Loading the content async will cause the components to update, the user will notice a flash on the page. It would be better if the whole page would wait for the content until it renders something.

## Todo
- [ ] make package private so it does not get pushed accidentally
- [ ] put static files into seperate folder but copy them over in build phase, hopefully without additional tools
- [ ] add markdown support
- [ ] load articles from server
- [ ] 


## sources
* https://facebook.github.io/react/docs/jsx-in-depth.html
