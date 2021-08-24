// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  if (data.licenses === "MIT License") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "APACHE 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  return `
#${data.ProjectTitle}
  
  # Table of Contents
  1. [Github](#Github)
  2. [Description](#Description)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [License](Licesne)
  6. [Contributors](#Contributors)
  7. [FAQ](#FAQ)
  
# Github
#${data.GitHubUsername}

# Description
#${data.ProjectDescription}

# Install
#${data.Install}

# Usage
#${data.Usage}

# Licenses
#${data.License}

# Number of Contributors
#${data.Contributors}

# How to Initialize project
#${data.FAQ1}
  `;
}

module.exports = generateMarkdown;
