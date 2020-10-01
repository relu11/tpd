import { TPD_ROLE, MANAGER_ROLE } from '../config';

const jwt = require('jsonwebtoken');
/**
 * Checks token if user is looged in
 */
export const loggedIn = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};
/**
 * Checks token if user is a tpd
 */
export const tpdOnly = async (req, res, next) => {
  if (req.user.role === TPD_ROLE) {
    next();
  } else {
    return res.status(401).send('Access Denied');
  }
};
/**
 * Checks token if user is a manager
 */
export const managerOnly = async (req, res, next) => {
  if (req.user.role === MANAGER_ROLE || req.user.role === TPD_ROLE) {
    next();
  } else {
    return res.status(401).send('Access Denied');
  }
};
