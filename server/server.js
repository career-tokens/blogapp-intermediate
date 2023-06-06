import { app } from "./app.js";
import { connectDB } from "./database.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} `
  );
});