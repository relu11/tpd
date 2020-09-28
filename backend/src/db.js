import mysql from "mysql";
import { DATABASE_URL } from "./config";

const dbConnection = mysql.createConnection(DATABASE_URL);

dbConnection.connect((err) => {
  if (err) {
    console.log(`Error connecting to database: ${err}`);
    return;
  }
  console.log("Connected to database");
});

export default dbConnection;
