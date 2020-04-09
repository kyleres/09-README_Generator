const axios = require("axios").default;

function getUser() {
  axios({
    url: `https://api.github.com/users/kyleres`,
    method: "GET",
    headers: {
      token: "03af64074fdba00f4970758fba3825ce84507e55",}
  })
  .then(function (response) {
    return response.data;
  });
};

getUser();

module.exports = getUser