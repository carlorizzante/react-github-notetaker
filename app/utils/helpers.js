import axios from "axios";

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getBio (username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

// var promiseObj = getRepos("carlorizzante");
// promiseObj.then(
//   function (data) {
//     console.log(data);
//   }
// );

const helpers = {
  getGitHubInfo: function (username) {
    return axios.all([
      getRepos(username),
      getBio(username)
    ]).then(function (arr) {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      }
    }, function (error) {
      console.log("Error!", error);
    });
  }
}

export default helpers;
