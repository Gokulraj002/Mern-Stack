const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("sms");
        return db; 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

function getDB() {
    if (!db) {
        throw new Error("Database connection is not available. Make sure to call connectDB first.");
    }
    return db;
}

module.exports = { connectDB, getDB };
