import express from 'express';
import User from '../models/User';

const jwt = require('jsonwebtoken');

/**
 * login
 * @param {express.Request} req - Request Object
 * @param {express.Response} res - Response Object
 */

export const logIn = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.logIn(req.body.email, req.body.password);

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        employeeId: user.employeeId,
      },
      process.env.TOKEN_SECRET
    );
    res.header('auth-token', token).send({ token });
  } catch (error) {
    res.status(401).send('Wrong username or password');
  }
};
