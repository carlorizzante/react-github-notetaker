var React = require("react");
var Router = require("react-router"); // need for later

var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");
var Notes = require("./Notes/Notes");

var Profile = React.createClass({
  getInitialState: function () {
    return {
      notes: [1,2,3],
      bio: {
        name: "Jon Snow"
      },
      repos: ["a", "b", "c"]
    }
  },
  render: function () {
    return (
      <div className="row">
        <div className="col-sm-4">
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-sm-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-sm-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
