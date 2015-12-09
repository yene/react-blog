# React Blog
Small Blog in react, to learn react, that uses HTTP directory listing as index, no backend needed.

## Technology
* React and react router
* Webpack and Webpack server
* Babel with es2015 and react preset

## Folders & Files
* /app contains the react code
* /build contains the generated version ready for deploy
* /app/index.jsx is our webpack starting point

## external dependencies
* React and markdown is included from CDN, with local fallback. React router is in the bundle. Highlight.js has no fallback.

**Local copies have to be updated manually.** 

## Debugging React
To debug React use the uncompressed, development version by removing *min* from the react script element.

## React and ES2015
http://babeljs.io/blog/2015/06/07/react-on-es6-plus/

## Update all packages
`npm-check-updates -u --upgradeAll`

## Changelogs
* https://github.com/facebook/react/blob/master/CHANGELOG.md
* https://github.com/babel/babel/blob/master/CHANGELOG.md

## Todo
- [X] make package private so it does not get pushed accidentally
- [X] revert code back, take post name from filename, just list without preview
- [X] add markdown support
- [X] load articles from server
- [X] add fallback for all external libs
- [X] add react-route
- [X] update to react 0.14
- [X] add react router from CDN https://cdnjs.com/libraries/react-router
- [X] get react browser plugin working
- [X] extract shared code
- [X] CSS build process and modules
- [X] use eslint
- [ ] style lists and caption similar to medium.com
- [ ] separate build files from static files





