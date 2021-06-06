# Go Look at a Tree API

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [API Documentation](#walkthrough)
* [Contributors](#contributors)
* [Technologies](#technologies)

## Description

 - This API is part of a group project assigned by [Turing School of Software and Design](www.turing.edu).  We were given 10 days to complete an application utilizing an entirely new technology (or in our case, multiple technologies). Our group built a full-stack application from scratch, learning PostrgreSQL, Knex, and Express to build our first API, which we deployed to Heroku. The frontend portion of this project can be found [here](https://github.com/kendallha/go-look-at-a-tree).

 - Our Turing instructors often encourage us to take a break from learning to code and "go look at a tree" to decompress, so we decided to honor that advice *while* learning to code. 

### [API Deploy Link](https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees)
 ### [Site Deploy Link](http://errm-rancid-tomatillos.surge.sh/)
### [Backend Repo](https://github.com/kendallha/go-look-at-a-tree-api)
### [Frontend Repo](https://github.com/kendallha/go-look-at-a-tree)

## Installation
If connecting to the API on your local machine, follow these steps:
1. Clone down this [repo](https://github.com/kendallha/go-look-at-a-tree-api)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Install [PostgreSQL](https://www.postgresql.org/download/)
5. In `psql`, run `CREATE DATABASE treedata`
6. In your terminal run the following commands
    - `knex migrate:latest`
    - `knex seed:run`
7. In postgres, you should see a database named `treedata`, with a table `trees` with data seeded. 
8. Run `nodemon server/server.js` to connect to the express server.


## API Documentation
  <table>
    <tr>
      <td>Description</td>
      <td>URL</td>
      <td>Method</td>
      <td>Required Properties for Request</td>
      <td>Successful Response</td>
    </tr>
    <tr>
      <td>Get all trees</td>
      <td>https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees</td>
      <td>GET</td>
      <td>None</td>
      <td>Array of tree objects</td>
    </tr>
    <tr>
      <td>Add a tree</td>
      <td>https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees</td>
      <td>POST</td>
      <td>{name, scientific_name}</td>
      <td>ID of new tree</td>
    </tr>
    <tr>
      <td>Delete a tree</td>
      <td>https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees/:id</td>
      <td>DELETE</td>
      <td>None</td>
      <td>Number of trees deleted</td>
    </tr>

  </table>

## Contributors
<table>
    <tr>
        <td><a href="https://github.com/RMartin0717">Riley Martin</td>
         <td><a href="https://github.com/zachjjohns">Zach Johnson</td>
        <td><a href="https://github.com/kendallha">Kendall Haworth</td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/76700555?v=4" alt="Z. Johnson" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/25498241?v=4" alt="K. Haworth" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
  <tr>
    <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
    <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
    <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
  </tr>
  <tr>
    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5B8GMClLqIJ2RObCTxzObLFKRYbg7fIKlCaZIOqnQhglC9o5DXT7Eg5YWNTnIidoHD4&usqp=CAU" alt="react" width="100" height="auto" /></td>
    <td><img src="https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195562/express_js-161052138fa79136c0474521906b55e2.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.stackshare.io/service/3376/knex.png" alt="react" width="100" height="auto" /></td>
  </tr>
</table>
