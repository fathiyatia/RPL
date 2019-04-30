
const handleForpass = (req, res, db, bcrypt) => {
    const{ email } = req.body.email;
    db.select('email').from('users')
    .where({'email':  email})
    .then(data => {
        return db.select('password').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
    })
    .catch(err => res.status(400).json('wrong credentials'))
  //input email
  //output link reset(?)
  //atau passwordny wkkwkw

}

module.exports = {
  handleForpass
};
