export const trendings = (req, res) => res.send("trendings {videoControllers}");
export const search = (req, res) => res.send("search video!! {videoControllers}");

export const upload = (req, res) => res.send("upload video!! {videoControllers}");
export const see = (req, res) => {
    console.log(`여기는 파람입니다. ${req.params.id}`);
    res.send(`vidio ${req.params.id} see!! {videoControllers}`);
}
export const edit = (req, res) => res.send(`video ${req.params.id} edit !! {videoControllers}`);
export const remove = (req, res) => res.send(`video ${req.params.id} remove!! {videoControllers}`);

