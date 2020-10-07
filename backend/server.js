// Express server initiated 
const express = require("express");
// Middleware for parsing body
const bodyParser = require("body-parser"); 
const cors = require('cors');
// Created an instance of express server
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const fs = require("fs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Handled the routing in a separate file
require("./Route/Route.js")(app, fs);
app.listen(port);