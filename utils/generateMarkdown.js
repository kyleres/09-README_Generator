function generateMarkdown(answer) {
  return `
# ${answer.title}
![GitHub forks](https://img.shields.io/github/forks/${answer.user}/${answer.title}?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/${answer.user}/${answer.title})

## Description
${answer.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
// - [Questions](#questions)
- [Credits](#credits)

## Installation
${answer.installation}

## Usage
${answer.usage}

## Contributing
${answer.contributing}

## Tests
${answer.tests}

## License
${answer.license}

// ## Questions
// ${api.data.avatar_url}
// For questions, comments, or to simply get in contact with the author ${api.data.name} (${api.data.login}), check out the GitHub account [here](${api.data.html_url}).

## Credits
${answer.credits}
`;
}

module.exports = generateMarkdown;