const express = require('express');

const recipesRouter = require("./api/recipesRouter");

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

module.exports = server;