const handleHandover = (req, res, db) => { //ini get apa post ya?
  const { id } = req.params;
  const{ name } = req.body.name;
  db('orders').where({
    'id' : customer_id
  }).update({
    'pemilik': name
  }) //belom tau cara .where('category', '=', req.params) (?)
    .then(order => {
      if (order){
            res.json(order[0]);
          } else {
            res.status(400).json('Gagal ganti nama')
          }
          })
    .catch(err => res.status(400).json('erorr'))
        //output nya pindah ke category terus nampilin cards info berdasarkan category
      //if()...
}

module.exports = {
  handleHandover: handleHandover
};