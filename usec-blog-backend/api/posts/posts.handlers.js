const { listPosts } = require("./posts")

exports.getPosts = async (req, res) => {
    const { user } = req.body
    try {
        const posts = await listPosts(user)
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
