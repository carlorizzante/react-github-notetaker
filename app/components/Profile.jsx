var React = require("react");
var Router = require("react-router"); // need for later

var Profile = React.createClass({
  getInitialState: function () {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function () {
    return (
      <div className="row">
        <div className="col-sm-4">
          User Profile Component > {this.props.params.username}
        </div>
        <div className="col-sm-4">
          Repos Component
        </div>
        <div className="col-sm-4">
          Notes Component
        </div>
      </div>
    );
  }
});

module.exports = Profile;
