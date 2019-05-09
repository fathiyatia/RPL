// const handleMyassets = (req, res, db) => {
//   const { name, category, address, norek, bank } = req.body;
//   if(!name || !category || !address){
//     return res.status(400).json('wrong form of submission');
//   }
//   //const hash = bcrypt.hashSync(password);
//     db.transaction(trx => {
//       trx.insert({
//         name: name,
//         category: category,
//         address: address
//       })
//       .into('items')
//       .returning('name')
//       .then(nameRek => {
//         console.log("bah")
//         console.log(nameRek)
//         console.log("bah")
//         return trx('bankaccount')
//           .returning('*')
//           .insert({
//             name: nameRek[0],
//             category: category,
//             norek: norek,
//             bank: bank
//           })
//           .then(items => {
//             res.json(items[0]);
//           })
//       })
//       .then(trx.commit)
//       .catch(trx.rollback)
//     })
//     .catch(err => res.status(400).json('unable to insert items'))
// }



const handleMyassets = (req, res, db) => {
  const { name, email, address, norek, bank } = req.body;
  if(!email || !name || !norek || !address || !bank){
    return res.status(400).json('wrong form of submission');
  }
  //const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        name: name,
        category: category,
        address: address
      })
      .into('items')
      .returning('email')
      .then(namaRek => {
        console.log("bah")
        console.log(namaRek)
        console.log("bah")
        return trx('bankaccount')
          .returning('*')
          .insert({
            name: nameRek[0],
            category: category,
            norek: norek,
            bank: bank
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
  handleMyassets
};

// module.exports = {
//   handleSignup
// };