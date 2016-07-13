var React = require("react");

var Repos = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Repos</h3>
        <p>{this.props.repos[0]}</p>
      </div>
    );
  }
});

module.exports = Repos;
