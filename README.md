# GitHub Repo Finder

### By Sami Al-Jamal
## Description

This website allows a user to input a github user id and the output will list the user id's information and a list of their repos. This is made possible by using the github API.

## Setup/Installation Requirements

* Clone this repository to /Desktop
* Install npm, bower, and gulp globally.
* Create .env file and follow the Github Api instructions below.
* ``` $ npm install ``` to pull dependencies listed in package.json
* ``` $ bower install ``` to pull dependencies listed in bower.json
* ``` $ gulp build -production ``` to build tasks list in gulp.js file.
* ``` $ gulp serve ``` to engage browser-sync.

## GitHub API key
This website requires an API key to access information.
* navigate to the settings area of your GitHub account, select the *personal Access Tokens* from the sidebar, and hit *Generate New Token*.
* GitGitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.
* Place your token in an .env file at the top level of your directory in the following format.
  * exports.apiKey= "your_API_Token";

## Known Bugs

No known bugs.


## Support and Contact Details

Contact me at sami.m.aljamal@gmail.com

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Github API


### License

This software is Licensed under the MIT license.

Copyright (c) 2016 Sami Al-Jamal
