const { MongoClient } = require("mongodb");

/**
 * @type {MongoClient}
 */
let client = null;

/**
 * Connects to a MongoDB instance and calls the callback function after the connection is established
 *
 * @param {string} host Host of the MongoDB instance
 * @param {string | number | 27015} port Port of the MongoDB instance
 * @param {string} databaseName Database name to connect to
 * @param {string} username Username to connect to the database
 * @param {string} password Password to connect to the database
 * @param {function} callback Callback function to be called after the connection is established
 */
async function connect(
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

    try {
        await client.connect();
    } catch (err) {
        console.error(err);
    } finally {
        callback();
    }
}

/**
 * Connect to a different database in the same MongoDB instance
 *
 * @param {string} dbName The name of the database to connect to.
 * @returns {import("mongodb").Db} The database object
 */
function db(dbName) {
    return client.db(dbName);
}

/**
 * Closes the connection to the MongoDB instance
 */
function close() {
    if (client !== null) {
        client.close();
        client = null;
    }
}

/**
 * Generates a connection string for a MongoDB instance based on the parameters
 *
 * @param {string} host The host of the MongoDB instance
 * @param {string | number} port The port of the MongoDB instance
 * @param {string} databaseName The name of the database to connect to
 * @param {string} username The username to connect to the database
 * @param {string} password The password to connect to the database
 * @returns string The MongoDB connection string
 */
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
