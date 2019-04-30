const handleLogin = (req, res, db, bcrypt) => {

  const{ email, password } = req.body; 
  if(!email || !name || !password){
    return res.status(400).json('wrong form of submission');
  }
  db.select('email', 'password').from('users')
    .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].password);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials')
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
  handleLogin
};