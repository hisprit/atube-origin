// const express = require("express"); // require("express")형식은 CommonJS스타일 임

import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("================================================")
    
    res.send('Hello Express!!!!!!!asdfsdfsda') ;  
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} + 3000!`);

})
