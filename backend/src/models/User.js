import Model from "./Model";
import dbConnection from "../db";
class User extends Model {
  constructor(userID, userName, password, email) {
    super("");

    this.userID = userID;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }

  static logIn(userName, password, callback) {
    var sql = `select * from users, user_role WHERE user_name = "${userName}" OR email = "${userName}" AND password = "${password}" AND id = user_id`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result[0]);
    });
  }
}

export default User;
