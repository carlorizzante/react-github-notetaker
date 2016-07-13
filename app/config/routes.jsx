var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
// var {Router, Route, IndexRoute, hashHistory} = require("react-router");

var Main = require("Main");
var Home = require("Home");

console.log("Loading config.jsx");

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
