import dotenv from "dotenv";
// or we can : 
// require('dotenv').config({ path: './env' })
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,  () => {
        console.log(`Server is running at port : $
            {process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("MONGODB connection failed", err);
    
});

// import express from "express";

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
//         app.on("error", (error) => {
//             console.error("ERROR:", error);
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Aap is listening on port : ${process.env.PORT}`)
//         })

//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("ERROR:", error);
//         throw error;
//     }
// })();
