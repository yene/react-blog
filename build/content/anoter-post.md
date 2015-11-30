# title

<pre>
Decimals.Three // 10.123
Currency.USD // $10.12
General.Ordinal // 10th
General.SpellOut // ten point one two three
General.Distance // 30 feet
</pre>

## subtitle

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import PostListing from './post-listing';
import Post from './post';
import { Router, Route } from 'react-router';

require('./normalize.css');
require('./global.css');

class NoMatch extends React.Component {
  render() {
    return (
      <p>Page not found.</p>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={PostListing} />
    <Route path="post/:filename" component={Post} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('content'));
```


Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```

Another test case without code?
ReactDOM.render((
  <Router>
    <Route path="/" component={PostListing} />
    <Route path="post/:filename" component={Post} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('content'));
```
