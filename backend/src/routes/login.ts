import express from 'express';

const router = express.Router();

const adminUser = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    res.status(200).send('You are logged in.');
  } else {
    res.status(401).send('Wrong username or password');
  }
});

export default router;
