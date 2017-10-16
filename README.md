# Sportify

### Team Members:
* Ezha Randall
* Vanessa Blue
* Morgan Chastain
* Jonathan Ansley


### Links:
 * [GitHub Repository](https://github.com/ezharandall/Sportify3)
 * [Heroku](https://sportify4.herokuapp.com/)???????


### Project Description:
GW Final Project Oct 2017
manage team sports


### Instructions for database (initial setup):
???? - These instructions need to be double-checked.

Warning: This will drop any previous tables and delete any data.
1. In MySQL workbench, SQL Pro, or similar program, run schema.sql. It will drop the database (if it exists) and will create the database.
2. Go to bash and "npm start". That will have sequelize create the empty tables.
3. In MySQL workbench, SQL Pro, or similar program, run "seeds.sql". That will insert sample data into the tables.

Note: If you do not want to change your database each time you run "npm start", then go into server.js and change "force: true" to "force: false".
