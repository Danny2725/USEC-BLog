const { MongoClient } = require("mongodb");

// /** @type {import("mongodb").MongoOptions} */
// const dbOptions = {};
let client = null;

/**
 *
 * @param {string} host Host of the MongoDB instance
 * @param {string | number | 27015} port Port of the MongoDB instance
 * @param {string} databaseName Database name to connect to
 * @param {string} username Username to connect to the database
 * @param {string} password Password to connect to the database
 * @param {} callback Callback function to be called after the connection is established
 * @returns {void}
 */
function connect(
    host,
    // biome-ignore lint/style/useDefaultParameterLast: Just so that it follows the natural order of parameters
    port = 27017,
    databaseName,
    username,
    password,
    callback,
) {
    if (client !== null) {
        callback();
        return;
    }

    const connectionString = generateConnectionString(
        host,
        port,
        databaseName,
        username,
        password,
    );
    client = new MongoClient(connectionString);

    client.connect((err) => {
        if (err) {
            client = null;
            callback(err);
        } else {
            callback();
        }
    });
}

function db(dbName) {
    return client.db(dbName);
}

function close() {
    if (client !== null) {
        client.close();
        client = null;
    }
}

function generateConnectionString(
    host,
    port,
    databaseName,
    username,
    password,
) {
    if (username && password) {
        return `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;
    }
    return `mongodb://${host}:${port}/${databaseName}`;
}

module.exports = {
    connect,
    db,
    close,
};
