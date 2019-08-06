# ⚛️ Compound Component Pattern

### Description

This pattern can be acheived with the help of [React.Children.map](https://reactjs.org/docs/react-api.html#reactchildren) or by [Context API](https://reactjs.org/docs/context.html).

Both of these ways are implemented in this branch.

```js
/* Components/App.jsx */

1 import React, { Component } from "react";
2 import "./styles.scss";
3
4 // import Accordion from "./Accordion/Accordion-context";
5 import Accordion from "./Accordion/Accordion";
6
7 class App extends Component {
```

Toggle the comments on line `4` and `5` to switch between `React.Children.map` and `Context API` respectively.

#### Packages used:

- [classnames](https://github.com/JedWatson/classnames)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
