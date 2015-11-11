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
* How to share code between component (ES modules)?
* can webpack modify html files, does it have config variables etc?
* why do i get a route warning but it still works? "Warning: Location "post/anoter-post.md" did not match any routes"
* is it possible to write a webpack loader that setups the fallback js files
* Whats a nice way to style a module or react component but still have a working build process (concat)?
* are semicolons required (babel) -> no javascript sets semicolons himself but it is good practise to have them i guess

## Notes
Loading the content async will cause the components to update, the user will notice a flash on the page. It would be better if the whole page would wait for the content until it renders something.

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
- [ ] a little bit of unit testing
- [X] use eslint

## Learned
* use constructor instead of getInitialState in ES2015, set the state directly
* adjacent JSX must be wrapped in one root tag
* The unminified version of React is "development" mode, and the minified version of React is "production" mode.
* If module contains only one function or class you can use `export default`
* ReactElements are immutable virtual Dom.
* Refs allow you to add a callback for when the render finished.

## links
* https://facebook.github.io/react/docs/jsx-in-depth.html
* http://ricostacruz.com/cheatsheets/react.html


# CSS
Style the Page based on http://dougblack.io/words/a-good-vimrc.html
guide lines http://cssguidelin.es
how to write css https://speakerdeck.com/dafed/managing-css-projects-with-itcss

## Notes
* if markdown contains h1 title how should it be styled compared to the post title, equal size or smaller?

## highlight.js
Note: JS script blocks, not async.
Letting highlight.js work on the virtualdom in react would have been nice.

style  tomorrow

# Style todos

## style lists
https://medium.com/@ev/i-wrote-something-upsetting-to-people-on-the-internet-f705f83aac37

## full width images
https://medium.com/@aaronzlewis/what-s-really-going-on-at-yale-6bdbbeeb57a6

## text below images
https://medium.com/@aaronzlewis/what-s-really-going-on-at-yale-6bdbbeeb57a6





