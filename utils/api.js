const axios = require("axios").default;
const fs = require("fs");

function getUser(user) {
  axios({
    url: `https://api.github.com/users/kyleres`,
    method: "GET",
    headers: {
      token: "03af64074fdba00f4970758fba3825ce84507e55",}
  })
  .then(response => {
    let questionsSection = `
## Questions
![](${response.data.avatar_url})

For questions, comments, or to simply get in contact with the author ${response.data.name} a.k.a "${response.data.login}", check out the GitHub account [here](${response.data.html_url}).
    `;

    fs.appendFile("./markdown/README.md", questionsSection, function() {
      return;
    });
  });
};

module.exports = getUser