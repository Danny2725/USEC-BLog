function listPosts(users) {
    // Get the mock posts from the ../blogsData.json file
    const posts = require("../blogsData.json")

    // Return the mock posts data
    return posts
}

exports.listPosts = listPosts
