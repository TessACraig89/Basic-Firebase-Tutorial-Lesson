![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# What is Firebase?

- Firebase is a backend platform for building Web, Android and IOS applications.
- It offers a real time database, different APIs, multiple authentication types and hosting
- In this tutorial, we'll cover the basics of the Firebase platform

- We'll be exploring this framework using JavaScript and a simple codebase included in this repo
- Click here for the [codebase](https://github.com/myDeveloperJourney/Firebase-Tutorial/tree/master/Sample_App)

## Learning Objectives
- To have a basic understanding of firebase
- Create a basic Web app that can create database
- We'll also try to retrieve some data as well

## What can Firebase do?
_Firebase can power your app's backend, including data storage, user authentication, static hosting, and more. Focus on creating extraordinary user experiences. We will take care of the rest. Build cross-platform native mobile and web apps with our Android, iOS, and JavaScript SDKs. You can also connect Firebase to your existing backend using our server-side libraries or our REST API._ - from the firebase documentation

## Features:
- Real-time Database − Firebase supports JSON data and all users connected to it receive live updates after every change.

- Authentication − We can use anonymous, password or even different social authentications.

- Hosting − Applications can be deployed over secured connection to Firebase servers.

## Advantages
- It is simple and user friendly. No need for complicated configuration.

- The data is real-time, which means that every change will automatically update connected clients.

- Firebase offers simple control dashboard.

- There are a number of useful services to choose.

## Firebase Limitations

- Firebase free plan is limited to 50 Connections and 100 MB of storage.
- Because there is no code, Firebase cannot process data! It only can do Auth, and store and synch basic structured JSON”
- Firebase is only good for simple data relationships and data storage.
  * We'll learn how to build more robust database solutions later in class.

### Let's use Firebase!
- Step One: Create a [Firebase Account](https://firebase.google.com/pricing/) *We'll use the free plan*
- Step Two: Create a Firebase Project by clicking on 'Add Project'.
   * Follow the instructions for naming your project.
- Step Three: Clone a copy of the [codebase](https://github.com/myDeveloperJourney/Firebase-Tutorial/tree/master/Sample_App) for your reference, or you can use your own project.

## Prep your project
- Because of firebase's flexibility, there are a few ways we can use it in our web app.
- For this demo, I'll use the API key they provided me with.
  * We can simply copy and paste into our ```index.html``` file. Here's an example of what we'll use:
```
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "YOUR KEY",
    authDomain: "fire-base-demo-62933.firebaseapp.com",
    databaseURL: "https://fire-base-demo-62933.firebaseio.com",
    projectId: "fire-base-demo-62933",
    storageBucket: "fire-base-demo-62933.appspot.com",
    messagingSenderId: "152762889019"
  };
  firebase.initializeApp(config);
</script>
```

## Time to create some data
- I will provide a demonstration of this.
  * Data can easily be created in the Firebase Console, or with your app.
  * Let's dive in deeper to see how this works:
