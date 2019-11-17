# FreeCodeSchool Indy

[![Build Status](https://travis-ci.org/freecodeschoolindy/freecodeschoolindy.github.io.svg?branch=master)](https://travis-ci.org/freecodeschoolindy/freecodeschoolindy.github.io)

Website for freecodeschoolindy.com


## Editing Content

1. Create a GitHub account and log in
1. Go the `content` folder and click on a file
1. Click the pencil icon in the top right of the file to edit it
1. Write the content using Markdown
   * If you are unfamiliar with it, you can Google Markdown for more information
1. Use the "Preview Changes" at the top to verify the file looks as intended
1. Click the `Commit changes` button at the bottom
1. Click "Create pull request"
   * This will create a Pull Request (PR), which is a request for the changes to be pulled into the project
1. Once created, the PR will be automatically checked for any linting issues that may cause problems if merged
1. If there are problems there will be a red X on your PR, click on it to see the details of what needs corrected
   * You can edit the file in your PR again to make additional changes/corrections
1. If there are no problems found, then one of the maintainers can merge your pull request
1. With in moments of merging the changes will be live (you may need to do a hard refresh to see the changes)


## Running locally

1. Install Node and npm
1. Clone the repo
1. `npm install`
1. `npm start` and go to https://localhost:8000
1. `npm run validate` to see if there are linting errors that would prevent merging


## TODO

1. Create @FreeCodeSchoolIndy Twitter account
1. Finalize copy for the website
1. Establish a logo/branding for the program
1. Create favicon/meta images using branding
1. Pick a theme for the website (dropdown in top corner)
   * Customize theme if needed


## Technology Colophon

* GitHub Pages
* Vue 2
* Vuex 3
* Bootstrap 4
* HTTP-Vue-Loader
* Marked.js
* Travis-CI
   * ESLint
   * MarkdownLint
