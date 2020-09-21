import Employee from "./Employee";
import Model from "./Model";
import dbConnection from "../db";

class Manager extends Model {
  constructor(id, name) {
    super("");

    this.id = id;
    this.name = name;
  }
  static getManagers(callback) {
    var sql = `select * from managers`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result);
    });
  }
  static getManagers(id, callback) {
    var sql = `select * from managers WHERE id = "${id}"`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result[0]);
    });
  }
}

export default Manager;
