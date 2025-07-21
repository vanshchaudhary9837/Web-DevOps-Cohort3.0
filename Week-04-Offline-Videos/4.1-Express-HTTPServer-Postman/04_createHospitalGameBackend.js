/*
Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

const express = require("express");

const app = express();

const users = [
  {
    name: "Rohan",
    kidneys: [
      {
        healthy: false,
      },
      { healthy: true },
    ],
  },
];

// Middleware to parse JSON data in the request body
app.use(express.json());

// Create a route handler for GET request
app.get("/", function (req, res) {
  // get the kidneys of the first user in the users array
  const rohanKidneys = users[0].kidneys;
  // console.log(rohanKidneys);

  // get the number of kidneys of the first user in the users array and store it in numberOfKidneys variable
  const numOfKidneys = users[0].kidneys.length;
  // console.log(numOfKidneys);

  // get the number of healthy kidneys
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (rohanKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  //get the number of unhealthy kidneys
  const numOfUnhealthyKidneys = numOfKidneys - numberOfHealthyKidneys;

  // send the response in JSON format with the number of kidneys, number of healthy kidneys and number of unhealthy kidneys
  res.json({
    numOfKidneys,
    numberOfHealthyKidneys,
    numOfUnhealthyKidneys,
  });
});

// create a route handler for POST request
// in POST request we send data in body(request body) like query parameters(/?a=3) in GET request
// Request Body - Send JSON data in the request body to add a new kidney to the user
// {
//    "isHealthy": true
// }

app.post("/", function (req, res) {
  // get the isHealthy value from the request body and store it in isHealthy variable
  const isHealthy = req.body.isHealthy;

  // add a new kidney to the first user in the users array with the isHealthy value from the request body
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  // send the response in JSON format with a message that the "kidney added successfully"
  res.json({
    message: "Kidney Implanted!",
  });
});
// for GET request we just see on address bar like localhost:3000 etc but for POST request we need POSTMAN.

// Create a route handler for PUT request
// Update all the unhealthy kidney to healthy kidney
app.put("/", function (req, res) {
  // check if there is atleast one unhealthy kidney, then update all the unhealthy kidneys to healthy
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      message: "Kidney Replaced Successfully!",
    });
  } else {
    // send the response with status code 411 and a message that "You have no unhealthy kidney to replace"
    res.status(411).json({
      message: "You have no unhealthy kidney to replace",
    });
  }
});

// Create a route handler for DELETE request
// Remove all the unhealthy kidney,
app.delete("/", function (req, res) {
  // check if there is atleast one unhealthy kidney, then remove all the unhealthy kidneys
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];

    // loop through the kidneys of the first user in the users array and add the healthy kidneys to the new array
    for (let i = 0; i < users[0].kidneys.length; i++) {
      // if the kidney is healthy, add it to the new array of kidneys
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    // update the kidneys of the first user in the users array with the new array of kidneys
    users[0].kidneys = newKidneys;

    // send the response in JSON format with a message that the "unhealthy kidney is removed successfully"
    res.json({
      message: "Unhealthy Kidney Removed Successfully!",
    });
  }
  const newKidneys = [];

  // loop through the kidneys of the first user in the users array and add the healthy kidneys to the new array
  for (let i = 0; i < users[0].kidneys.length; i++) {
    // if the kidney is healthy, add it to the new array of kidneys
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }

  // update the kidneys of the first user in the users array with the new array of kidneys
  users[0].kidneys = newKidneys;

  // send the response in JSON format with a message that the "unhealthy kidney is removed successfully"
  res.json({
    message: "Unhealthy Kidney Removed Successfully!",
  });
});

// Helper function to check if there is atleast one unhealthy kidney
function isThereAtleastOneUnhealthyKidney() {
  // loop through the kidneys of the first user in the users array
  for (let i = 0; i < users[0].kidneys.length; i++) {
    // if the kidney is unhealthy, return true
    if (!users[0].kidneys[i].healthy) {
      return true;
    }
  }

  // if there is no unhealthy kidney, return false
  return false;
}

app.listen(3000);
