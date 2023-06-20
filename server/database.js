import mongoose from "mongoose";
//mongoose is used to maintain relation with mongodb database
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};