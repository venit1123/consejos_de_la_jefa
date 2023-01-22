import mongoose from "mongoose";
import { MONGODB_URI, DATABASE_NAME } from "./config";


export const connectClient = async () => {
  await mongoose.connect(`${MONGODB_URI}/${DATABASE_NAME}`);
};

export const stopClient = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
};

