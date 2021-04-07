<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/andrewscohen/2020-Oct-GoodBuilds">
    <img src="https://user-images.githubusercontent.com/67562159/113816101-4c611a80-9742-11eb-9c9f-61687fb8c89b.png" alt="Good Builds Logo">
  </a>

  <h3 align="center">Good Builds</h3>

  <p align="center">
    <a href="https://github.com/andrewscohen/2020-Oct-GoodBuilds/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://goodbuilds1.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/andrewscohen/2020-Oct-GoodBuilds/issues">Report Bug</a>
    ·
    <a href="https://github.com/andrewscohen/2020-Oct-GoodBuilds/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With
- PostgreSQL
- Express.js
- Pug.js
- JavaScript
- CSS
- Bcryptjs
- Express-session
- Express-validator
- Node.js

<!-- GETTING STARTED -->
## Installation

To run this application locally, you'll need to:

1. `git clone` this repo
2. `cd` into the local repo
3. `npm install` to install the dependencies
4. Create a `.env` file based on the `.env.example` file included in the repo with your own values
5. Create a user on your local machine with the username and password specified in your `.env` file in PostgreSQL
6. Run `npx dotenv sequelize db:create` to create the database
7. If the sequelize module is not found, try running `npx dotenv sequelize-cli db:create` and replace sequelize with sequelize-cli for the rest of these commands
8. Run `npx dotenv sequelize db:migrate` to run the migrations
9. Run `npx dotenv sequelize db:seed:all` to seed the database
10. Finally, start the development server with `npm start`. The scripts in the package.json should do the work. You'll see the local address you can use show up in the terminal.

<!-- USAGE EXAMPLES -->
## Usage
### Here we will list the features / user experience ---tbd
<!-- ROADMAP -->
## Roadmap

Checkout The Planning Docs At The [Wiki](https://github.com/andrewscohen/2020-Oct-GoodBuilds/wiki) Section


<!-- CONTACT -->
## Contact

### Amber Horn: <a href="https://github.com/AmberJolieH" rel="noopener noreferrer" target="blank" title="github.com/AmberJolieH"><img align="center" src="https://simpleicons.org/icons/github.svg" alt="link to Amber's Github" height="30" width="40" /></a><a href="https://www.linkedin.com/in/amberjolie/" rel="noopener noreferrer" target="blank" title="linkedin.com/in/amberjolie/"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="link to Amber's LinkedIn" height="30" width="40" /></a>

### Andrew Cohen: <a href="https://github.com/andrewscohen" rel="noopener noreferrer" target="blank" title="github.com/andrewscohen"><img align="center" src="https://simpleicons.org/icons/github.svg" alt="link to Andrew's Github" height="30" width="40" /></a><a href="https://www.linkedin.com/in/mrandrewcohen/" rel="noopener noreferrer" target="blank" title="linkedin.com/in/mrandrewcohen/"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="link to Andrew's LinkedIn" height="30" width="40" /></a>
  
### Michael Digiovanni: <a href="https://github.com/midigi" rel="noopener noreferrer" target="blank" title="github.com/midigi"><img align="center" src="https://simpleicons.org/icons/github.svg" alt="link to Michael's Github" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/michael-digiovanni-292ab464/" rel="noopener noreferrer" target="blank" title="linkedin.com/in/michael-digiovanni-292ab464/"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="link to Michaels's LinkedIn" height="30" width="40" /></a>

### Olga Thompson: <a href="https://github.com/clarion22" rel="noopener noreferrer" target="blank" title="github.com/clarion22"><img align="center" src="https://simpleicons.org/icons/github.svg" alt="link to Olga's Github" height="30" width="40" /></a><a href="https://www.linkedin.com/in/olga-thompson-35937515a/" rel="noopener noreferrer" target="blank" title="linkedin.com/in/olga-thompson-35937515a/"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="link to Olga's LinkedIn" height="30" width="40" /></a>
