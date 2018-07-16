import React, { Component } from 'react';
import logo from './logo.svg';
import * as apis from './api/api';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import PropectedRouter from './router/PropectedRouter';
import Login from './components/login'
import Nofound from './components/errorPages/nofound'

import './App.css';
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const remove=(props)=>{
  localStorage.removeItem("login");
}
const My = () => (
  <div>
    <h2>我的页面</h2>
    <button onClick={
      remove
    }><Link to="/">推出登陆</Link></button>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apis };
  }
  get() {
    this.state.apis.mock('account=""&token=""').then((res) => {
      console.log(res)
      if (res.ok) {
        res.text().then((data) => {
          console.log(data);
        })
      }
    }).catch((res) => {
      console.log(res.status);
    });
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.get.bind(this)}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/my">My</Link>
              </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/login" component={Login}></Route>
                <PropectedRouter path="/my" component={My}></PropectedRouter>
                <Route  component={Nofound}></Route>
            </Switch>
         
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
