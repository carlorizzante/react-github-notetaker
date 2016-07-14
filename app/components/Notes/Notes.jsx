var React = require("react");

import NotesList from "./NotesList";
var AddNote = require("./AddNote");

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <AddNote
        username={username}
        addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

Notes.PropTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

// var Notes = React.createClass({
//   propTypes: {
//     username: React.PropTypes.string.isRequired,
//     notes: React.PropTypes.array.isRequired,
//     addNote: React.PropTypes.func.isRequired
//   },
//   render: function () {
//     return (
//       <div>
//         <AddNote
//           username={this.props.username}
//           addNote={this.props.addNote} />
//         <NotesList notes={this.props.notes} />
//       </div>
//     );
//   }
// });

module.exports = Notes;
