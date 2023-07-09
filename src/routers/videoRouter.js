import express from "express";

const videoRouter = express.Router();

videoRouter.get("/upload", (req, res) => {
    console.log("-----videoRouter !!!{videoRouter upload}-----");
    res.send('videoRouter 왔어요.. ');
})




export default videoRouter;