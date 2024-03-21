import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://thebiwon:W5IBTQHxNojo8rJR@cluster0.eh0qujj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
