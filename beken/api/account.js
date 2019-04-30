const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const handleProfile = (req, res, db) => { 
  //tambahin foto profil, nama, email , telepon
  //harus bisa di edit juga foto, nama, email, telpon -nya
  //input button order history sama mybusiness
    const { id } = req.params; 
    console.log(id);
    db.select('*').from('users').where({
      'id': id
    })
    .then(user => { 
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const editProfile = (req, res, db, bodyParser) => { 
  //tambahin foto profil, nama, email , telepon, alamat
  //harus bisa di edit juga foto, nama, email, telpon -nya
  //input button order history sama mybusiness

    console.log(req.body);
    console.log(req.params);
    const { id } = req.params;
    const { name, email, telepon } = req.body;
    db.select('*').from('users').where({
      'id' : id
    })
    .update({
      // 'name', '=', req.body.name,
      // 'email', '=', req.body.email, 
      // 'telepon', '=', req.body.telepon,
      // 'alamat', '=', req.body.alamat
      'name': name,
      'email': email,
      'telepon': telepon

  })
    .then(user => {
    console.log(user) 
      if (user) {
        res.json(user)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const deleteProfile = (req, res, db, bodyParser) => { 
  //tambahin foto profil, nama, email , telepon, alamat
  //harus bisa di edit juga foto, nama, email, telpon -nya
  //input button order history sama mybusiness

    console.log(req.body);
    console.log(req.params);
    const { id } = req.params;
    const { name, email, telepon, alamat } = req.body;
    db.select('*').from('users').where({
      'id' : id
    })
    .del()
    .then(user => {
    console.log(user) 
      if (user) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}


const handleItems = (req, res, db) => {
  const { id } = req.params; 
    db('items').where({
      'pemilik_id': id
    }).then(data =>{
          return db.select('name', 'category', 'description', 'address', 'pemilik_id').from('items')
          .where('pemilik_id', '=', id)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('gatau males mau beli truk'))
    })
    //   const isValid = bcrypt.compareSync(req.body.password, data[0].password);
    //   if (isValid) {
    //     return db.select('*').from('users')
    //       .where('email', '=', req.body.email)
    //       .then(user => {
    //         res.json(user[0])
    //       })
    //       .catch(err => res.status(400).json('unable to get user'))
    //   } else {
    //     res.status(400).json('wrong credentials')
    //   }
    // })
    .catch(err => res.status(400).json('wrong credentials'))
  //button ganti, termasuk foto dan text
  //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
  //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

}

const editItems = (req, res, db) => {
  const{ id } = req.params;
   const { name, category, address } = req.body;
  //button ganti, termasuk foto dan text
  //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
  //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

db.select('*').from('items').where({
      'pemilik_id' : id
    })
    .update({
      // 'name', '=', req.body.name,
      // 'email', '=', req.body.email, 
      // 'telepon', '=', req.body.telepon,
      // 'alamat', '=', req.body.alamat
      'name': name,
      'category': category,
      'address': address

  })
    .then(items => {
    console.log(items) 
      if (items) {
        res.json(items)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const deleteItems = (req, res, db) => {
  const{ id } = req.params;
   const { name, category, description, address } = req.body;
  //button ganti, termasuk foto dan text
  //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
  //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

db.select('*').from('items').where({
      'pemilik_id' : id
    })
    .del()
    .then(items => {
    console.log(items) 
      if (items) {
        res.json(items)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfile,
  editProfile,
  deleteProfile,
  handleItems,
  editItems,
  deleteItems
};
