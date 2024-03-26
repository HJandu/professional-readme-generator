// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  ${data.description}
  
  ![Image](${data.image})

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## License
  This application is covered under the ${data.license} license.
  ## Questions
  If you would like to contact me with any questions regarding this project, you can email me on the address below. 
  Email: ${data.email}
  You can also find me on GitHub, where you can explore other projects created by me.
  GitHub: [${data.github}]()

`;
}

module.exports = generateMarkdown;
