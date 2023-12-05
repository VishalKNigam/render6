const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./route/userRoute");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
app.use(cors());

app.use("/contacts" , userRouter)

app.listen(PORT , async()=>{
    try {
        await connection;
        console.log("server is running at port 8080")
    } catch (error) {
        console.log(error)
    }
})