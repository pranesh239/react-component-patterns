# ⚛️ Render Prop Pattern

### Description

> One of the real powers of the render prop API is **its ability for you to build on top of it**, not only for your components, but other render props components that have some good defaults. - [Kent C. Dodds](https://twitter.com/kentcdodds/status/977317314361282560?s=20)

In this branch we built a **Programmer Quotes** web app, which will allows user to copy and favourite the quotes they like.

```js
/* Components/App.jsx */

1 import React, { Component } from "react";
2 import "./styles.scss";
3
4 import Quotes from "./Quotes/Quotes";
5
6 class App extends Component { // Responsible for rendering layout
.
.
27 <Quotes ...> // Responsible for state
28 {({{ isFavourite, toggleFavourite, copyQuote }}) => }
.
.
56 </Quotes>

/* Components/Quotes/Quotes.jsx */

3 class Quotes extends Component {
4
5  state = {
6    isFavourite: false
7  };
.
.

21 render() {
22    const { isFavourite } = this.state;
23    return this.props.children({
24      isFavourite,
25      toggleFavourite: this.toggleFavourite,
26      copyQuote: this.copyQuote
27    }); // Here it helps the rendering by value to props
28  }
.
.
```

#### Packages used:

- [classnames](https://github.com/JedWatson/classnames)
- [Quotes API](https://programming-quotes-api.herokuapp.com/)

#### More to read:

- [Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [CSS Grids](https://www.w3schools.com/css/css_grid.asp)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
