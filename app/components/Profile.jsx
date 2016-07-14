var React = require("react");
var Router = require("react-router"); // need for later
var ReactFireMixin = require("reactfire");
var Firebase = require("firebase");

var helpers = require("helpers");
var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");
var Notes = require("./Notes/Notes");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbKwjLB-LcLd8TQ-SMc0_qsh5x0mpiqoM",
  authDomain: "react-github-notetaker-a0529.firebaseapp.com",
  databaseURL: "https://react-github-notetaker-a0529.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function () {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function () {
    var username = this.props.params.username;
    this.ref = Firebase.database().ref();
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, "notes");

    helpers.getGitHubInfo(username)
      .then(function (data) {
        this.setState({
          repos: data.repos,
          bio: data.bio
        });
      }.bind(this));
  },
  componentWillUnmount: function () {
    this.unbind("notes");
  },
  handleAddNote: function (newNote) {
    // Ref to current username/key in Firebase
    var childRef = this.ref.child(this.props.params.username);
    // Sets new record into childRef.notes at its end
    childRef.child(this.state.notes.length).set(newNote);
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
          <Repos
            username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className="col-sm-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
