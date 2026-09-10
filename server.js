const dotenv = require("dotenv"); 
const app = require("./src/app");
const connectToDB = require("./src/config/database");

dotenv.config();

connectToDB();

app.listen(process.env.PORT_NO, () => {
    console.log("Server is running on port no. 3000");
});