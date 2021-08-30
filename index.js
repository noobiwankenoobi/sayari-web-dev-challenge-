// index.js

/**
 * Required External Modules
 */
 const express = require("express");
 import cors from 'cors';

//  const path = require("path");

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
 app.use(cors());


/**
 * Routes Definitions
 */

 app.get("/", (req, res) => {
  res.status(200).send("Listening on Port 8000!!");
});

/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
