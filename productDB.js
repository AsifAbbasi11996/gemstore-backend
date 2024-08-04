require("dotenv").config();
const connectDB = require('./database/db')


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};
start();