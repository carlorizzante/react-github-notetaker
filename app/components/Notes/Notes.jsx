var React = require("react");

var Notes = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Notes</h3>
        <p>{this.props.notes[0]}</p>
      </div>
    );
  }
});

module.exports = Notes;
