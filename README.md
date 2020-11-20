# RevSocial - BackEnd

## Project Description

In Revature's Social Network everyone is friends with everyone else. Users can register, login to the application,
and start sharing multimedia with everyone. Registered users are allowed to modify their personal information and 
upload their profile pictures. The application provides a search feature that allows users to search out friends and 
look at their profiles. Users are provided with a "feed", in which they can see what everyone is posting and like posts. 
Users can access and use the application via an interactive client-side single paged application that stores and 
retrieves multimedia using AWS S3 and consumes a RESTful web service that provides business logic and access to a database.

## Technologies Used

* Spring
* Java
* PostgreSQL
* Hibernate
* React/Redux
* Jest/Enzyme
* JavaScript/TypeScript
* Log4j
* JUnit
* Agile-Scrum

## Features

 * As a user:
    * I can register a new account.
    * I can login/logout.
    * I can write a post.
    * I can like a post.
    * I can view all posts.
    * I can search other users and view their profile.
    * I can edit my profile: change my name and profile picture.
    * I can ask for a password reset and the application will send me an email on how to reset my password.

To-do list:
* Users can comment in posts.
* Users can add a YouTube link to their post - it should display YouTube API to display it.
* Users get notifications.

## Getting Started

1. Open up your terminal and create a new directory.
  - mkdir <directory_name>
2. Run the following command:
  - git clone https://github.com/matthewjunglee/RevSocial-FrontEnd.git
3. Change directory into the project directory and run:
  - npm i
4. Set up AWS S3. In src\components\S3ImageSender\ReactToS3.js, enter the bucket's name, region, and keys.
5. In src\util\axiosConfig.ts, change the base url.
6. Go to https://github.com/matthewjunglee/EmployeeReimbursementSystem.git and clone the back end.

## Usage

#### Home Page


## Contributors

* Kevin Bagnall
* Earnest Gibbs
* Matthew Lee
* Colin Shultz



# RevatureSocialNetwork
To start:\
npm i react\
npm install node-sass@4.14.1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
