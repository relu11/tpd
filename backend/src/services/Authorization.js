import { TPD_ROLE, MANAGER_ROLE } from "../config";
const jwt = require("jsonwebtoken");
/**
 * Checks token if user is looged in
 */
exports.loggedIn = function (req, res, next) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
/**
 * Checks token if user is a tpd
 */
exports.tpdOnly = async function (req, res, next) {
  if (req.user.user_type_id === TPD_ROLE) {
    next();
  } else {
    return res.status(401).send("Access Denied");
  }
};
/**
 * Checks token if user is a manager
 */
exports.managerOnly = async function (req, res, next) {
  if (req.user.user_type_id === MANAGER_ROLE) {
    next();
  } else {
    return res.status(401).send("Access Denied");
  }
};
