var React = require("react");

var SearchGitHub = require("SearchGitHub");

const Main = ({children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-10 col-sm-offset-1">
          <SearchGitHub />
        </div>
      </nav>
      <a href="/public/">Home</a>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div className="main-container">
//         <nav className="navbar navbar-default" role="navigation">
//           <div className="col-sm-10 col-sm-offset-1">
//             <SearchGitHub />
//           </div>
//         </nav>
//         <a href="/public/">Home</a>
//         <div className="container">
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// });

module.exports = Main;
