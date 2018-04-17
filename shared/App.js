import React, {Component} from 'react';
import routes from './routes';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
// import Navbar from './Navbar'
import NoMatch from './404';

/* <Navbar/> */

class App extends Component {
  render() {
    return (

      <div>

        <Switch>
          <Route exact path="/" component={NoMatch} />
        </Switch>

      </div>
    )
  }
}

export default App;
