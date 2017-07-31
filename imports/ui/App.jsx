import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './Home.jsx';
import Foo from './Foo.jsx';
import Bar from './Bar.jsx';
import NavigationBar from './NavigationBar.jsx';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/bar' component={Bar} />
            <Route path='/foo' component={Foo} />
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
