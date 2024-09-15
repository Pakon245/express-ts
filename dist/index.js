"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log('listening on http://localhost:3000');
});