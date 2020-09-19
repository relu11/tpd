import express from "express";

const router = express.Router();


router.get('/hello', (req, res) => {
  res.send({ message: 'Hello, world!' });

});

export default router;
