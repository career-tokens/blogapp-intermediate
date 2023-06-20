//import functionality needs you to make changes in package.json
import { app } from "./app.js";//calling the express app
import { connectDB } from "./database.js";

connectDB();//connecting mongoose to database

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} `
  );
});//launching the express app