const posts = require("../blogsData.json");

const getPosts = (req, res) => {
    res.json(posts);
};

module.exports = {
    getPosts,
};
