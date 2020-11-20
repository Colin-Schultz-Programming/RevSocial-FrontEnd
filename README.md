# RevSocial - Front End

## Project Description

In Revature's Social Network everyone is friends with everyone else. Users can register, login to the application,
and start sharing multimedia with everyone. Registered users are allowed to modify their personal information and 
upload their profile pictures. The application provides a search feature that allows users to search out friends and 
look at their profiles. Users are provided with a "feed", in which they can see what everyone is posting and like posts. 
Users can access and use the application via an interactive client-side single paged application that stores and 
retrieves multimedia using AWS S3 and consumes a RESTful web service that provides business logic and access to a database.

## Technologies Used

* React/Redux
* Jest/Enzyme
* JavaScript/TypeScript
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
![Home Page](https://github.com/matthewjunglee/RevSocial-FrontEnd/blob/master/images/home.JPG?raw=true)

#### Account Buttons
![Account Buttons](https://github.com/matthewjunglee/RevSocial-FrontEnd/blob/master/images/buttons.JPG?raw=true)

#### Create Post
![Create Post](https://github.com/matthewjunglee/RevSocial-FrontEnd/blob/master/images/post.JPG?raw=true)

#### Update profile
![Update Profile](https://github.com/matthewjunglee/RevSocial-FrontEnd/blob/master/images/profile.JPG?raw=true)

#### Search Users
![Search Users](https://github.com/matthewjunglee/RevSocial-FrontEnd/blob/master/images/search.JPG?raw=true)

## Contributors

* Kevin Bagnall
* Earnest Gibbs
* Matthew Lee
* Colin Shultz
