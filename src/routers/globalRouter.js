import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
    console.log("-----home-----");
    res.send('home에 왔어요.. ');
})
globalRouter.get("/join", (req, res) => {
    console.log("-----Join-----");
    res.send('Join 에 왔어요.. ');
})
globalRouter.get("/login", (req, res) => {
    console.log("-----login-----");
    res.send('login 에 왔어요.. ');
    // res.end()
})
globalRouter.get("/search", (req, res) => {
    console.log("-----search-----");
    res.send('search 에 왔어요.. ');
    // res.end()
})

export default globalRouter;