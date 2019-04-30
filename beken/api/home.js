const handleHome = (req, res, db) => { //ini get apa post ya?
  const{ category } = req.body.category;
  db('items').where({
  	'category' : category
  }).returning('*') //belom tau cara .where('category', '=', req.params) (?)
    .then(item => {
            res.json(user[0]);
          })
        //output nya pindah ke category terus nampilin cards info berdasarkan category
      //if()...
}

module.exports = {
  handleHome: handleHome
};