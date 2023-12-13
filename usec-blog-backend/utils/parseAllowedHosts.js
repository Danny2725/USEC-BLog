/**
 * Parse the allowed hosts from the environment variable
 * @param {string} allowedHosts A comma-separated list of allowed hosts
 * @returns {string[] | "*"} An array of allowed hosts
 */
function parseAllowedHosts(allowedHosts) {
    /**
     * @type {string[] | "*"}
     */
    let parsedAllowedHosts
    if (allowedHosts) {
        if (allowedHosts.includes(",")) {
            parsedAllowedHosts = allowedHosts.split(",")
        } else if (allowedHosts === "*") {
            parsedAllowedHosts = "*"
        }
    }
    console.log(parsedAllowedHosts)
    return parsedAllowedHosts
}

module.exports = {
    parseAllowedHosts,
}
