import dbConnection from "../db";

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  getALl() {
    /* get ALl */
  }

  insert() {
    /* inserts to database */
  }

  get(_columns, _conditions) {
    /* Gets elements from database */
  }

  static query(sql, binding) {
    return new Promise((resolve, reject) => {
      dbConnection.query(sql, binding, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  query(sql, binding) {
    return new Promise((resolve, reject) => {
      dbConnection.query(sql, binding, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

export default Model;
