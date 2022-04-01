# ChairBnb
Welcome to ChairBnb wiki page! ChairBnb is an airbnb clone, an online rental service that helps people rent chairs from all over the world and 
rent their own chairs to other people.

## Live Site Link
[ChairBnb](https://airbnb-clone-gw.herokuapp.com/)

## Getting Started
1. Clone the Repo

    ```https://github.com/gwantt/ChairBnb.git```
  
2. In the root, backend, and frontend directories

    ```npm install```
   
3. Add an .env file containing the variables from the .env.exmaple file

4. Create your user and database based on what you put in your .env file

5. Use the Sequelize CLI to apply the provided database migrations and seeder.

     ```npx dotenv sequelize db:migrate```
  
     ```npx dotenv sequelize db:seed:all```
  
6. You can now run the application by starting both the frontend and backend using 


    ```npm start```
    
7. You can sign in via the sign up, if you don't already have an account, or log in form

## Features
1. User Authentication
* Users can sign up, log in, and log out.
* Users can log in via a demo user button

2. Chairs
* Logged in users can add chair listings, and edit or remove the ones they have created
* Logged out users are able to view chair listings but cannot add their own listings

3. Reviews
* Logged in users can also leave reviews on chairs as well as edit and delete their own reviews
* All users can view chairs and reviews associated to them
