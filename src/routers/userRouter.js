import express from "express";

const userRouter = express.Router();


userRouter.get("/", (req, res) => {
    console.log("-----user home !!!{userRouter/home}-----");
    res.send('user home에 왔어요.. ');
})
userRouter.get("/edit", (req, res) => {
    //console.log("-----user edit !!!{userRouter/edit}-----");
    res.send('userRouter/edit에 왔어요.. ');
})
userRouter.get("/remove", (req, res) => {
    console.log("-----user remove !!!{userRouter/remove}-----");
    res.send('uuserRouter/remove에 왔어요.. ');
})

export default userRouter;