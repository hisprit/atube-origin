// const express = require("express"); // require("express")형식은 CommonJS스타일 임
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
const logger = morgan("combined");


const home = (req, res) => {
    console.log("home");
    res.send('handle home');
    // res.end()
}

app.use(logger);
app.get('/', home);

app.listen(port, () => {
    console.log(`Example app listening on port ${port} + 3000!`);

})
