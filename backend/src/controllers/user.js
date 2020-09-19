import express from "express";
import User from "../models/User";
const jwt = require("jsonwebtoken");

/**
 * login
 * @param {express.Request} req - Request Object
 * @param {express.Response} res - Response Object
 */

export const logIn = (req, res) => {
  try {
    const user = User.logIn(req.body.email, req.body.password, function (data) {
      const token = jwt.sign(
        { id: data.email, user_type_id: data.role_id },
        process.env.TOKEN_SECRET
      );
      res.header("auth-token", token).send({ token: token });
    });
  } catch (error) {
    res.status(401).send("Wrong username or password");
  }
};
