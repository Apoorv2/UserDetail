const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const Mobileno =req.body.Mobileno;
  const newUser = new User({username, Mobileno});
  
  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
   
});

module.exports = router;