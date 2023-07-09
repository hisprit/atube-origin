// const express = require("express"); // require("express")형식은 CommonJS스타일 임
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const app = express();
const port = 80;
const logger = morgan("combined");

app.use(logger);

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port} + 3000!`);
})
