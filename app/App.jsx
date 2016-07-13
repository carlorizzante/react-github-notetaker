var React = require("react");
var ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");

// var routes = require("./config/routes");

var Main = require("Main");
var Home = require("Home");
var Profile = require("Profile");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="profile/:username" component={Profile} />
    </Route>
  </Router>,
  document.getElementById("app")
);
