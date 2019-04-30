const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const asyncHandler = require('express-async-handler')
const router = require('router')


const login = require('./api/login');
const signup = require('./api/signup');
const account = require('./api/account');
const home = require('./api/home');
const forgetpassword = require('./api/forgetpassword');
const handover = require('./api/handover');
const myassets = require('./api/myassets');


const db = knex({
  debug: true,
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'Rifqi',
    password : '',
    database : 'scbms'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {
  res.send(database.users);
})

app.post('/login', (req, res) => {
  login.handleLogin(req, res, db, bcrypt)
})

app.post('/signup', (req, res) => {
  signup.handleSignup(req, res, db, bcrypt)
})

app.post('/myassets', (req, res) =>{
  myassets.handleMyassets(req, res, db)
})


app.get('/account/:id', (req, res) =>{
  test = account.handleProfile(req, res, db)
  // console.log("test.............")
  // console.log(test)
  // console.log("test.............")
  // if (test) {
  //   res.json(test)
  // } else {
  //   res.status(400).json('Not found')
  // }
  account.handleItems(req, res, db)
})

app.put('/account/:id', (req, res) =>{
  account.editProfile(req, res, db, bodyParser)
  //account.editItems(req, res, db)
})

app.delete('/account/:id', (req, res) =>{
  account.deleteProfile(req, res, db)
  //account.deleteItems(req, res, db)
})

app.get('/forgetpassword', (req, res) => {
  forgetpassword.handleForpass(req, res, db, bcrypt)
})


app.get('/home', (req, res) => { //ini get apa post ya?
  home.handleHome(req, res, db)
})

app.put('/handover/:id', (req,res) =>{
  handover.handleHandover(req, res, db)
})


// app.post('/category', (req, res) => {

//   //post category
//   //input category dari /home
//   //output cards info item berdasarkan category

// })
// app.get('/category', (req, res) => {
//   //input category dari /home
//   //output cards info item berdasarkan category
//   //infonya
// })

// app.post('/items', (req, res) => {
//   //input date, time
//   //output date, time yang avaliable, alamat, foto item, CP
//   //pas klik pesan muncul pop up
//   //pop up item name, item date and time yang dipilih, harga
// })


// app.get('/items', (req, res) => {
//   //input date, time
//   //output date, time yang avaliable, alamat, foto item, CP
//   //pas klik pesan muncul pop up
//   //pop up item name, item date and time yang dipilih, harga
// })

// app.post('/myorder', (req, res) => {
//   //belom dibayar 
//   //input foto trf (ada button upload)
//   //output nama user, cards info(tempat, tanggal, jam, harga, status pemesanan), rekening yang punya 
//   //kalo udh upload ada pop up/ console.log('terima kasih sudah membayar')

//   //udah dibayar
//   //input click pindah tangan sama cetak bukti
//   //output pindah halaman ke /handover sama download pdf bukti pembayaran
// })


// app.get('/myorder', (req, res) => {
//   //belom dibayar 
//   //input foto trf (ada button upload)
//   //output nama user, cards info(tempat, tanggal, jam, harga, status pemesanan), rekening yang punya 
//   //kalo udh upload ada pop up/ console.log('terima kasih sudah membayar')

//   //udah dibayar
//   //input click pindah tangan sama cetak bukti
//   //output pindah halaman ke /handover sama download pdf bukti pembayaran
// })


// app.post('/handover', (req, res) => {
//   //input nama baru sama button cetak bukti
//   //output cetak bukti dengan nama yang baru
// })

// app.get('/handover', (req, res) => {
//   //input nama baru sama button cetak bukti
//   //output cetak bukti dengan nama yang baru
//   //get nama baru
// })

// app.get('/profiles', (req, res) => { 

// })

// app.put('/profiles/:id', (req, res) => { 
//   //tambahin foto profil, nama, email , telepon, alamat
//   //harus bisa di edit juga foto, nama, email, telpon -nya
//   //input button order history sama mybusiness
//     const { id } = req.params; 
//     console.log(id);
//     db.select('*').from('users').where({id})
//     .then(user => { 
//       if (user.length) {
//         res.json(user[0])
//       } else {
//         res.status(400).json('Not found')
//       }
//     })
//     .catch(err => res.status(400).json('error getting user'))
// })

// app.get('/profiles/:id', (req, res) => { 
//   //tambahin foto profil, nama, email , telepon
//   //harus bisa di edit juga foto, nama, email, telpon -nya
//   //input button order history sama mybusiness
//     const { id } = req.params; 
//     console.log(id);
//     db.select('*').from('users').where({
//       'id': id
//     })
//     .then(user => { 
//       if (user.length) {
//         res.json(user[0])
//       } else {
//         res.status(400).json('Not found')
//       }
//     })
//     .catch(err => res.status(400).json('error getting user'))
// })


// app.get('/orderhistory', (req, res) => { //butuh tabel order isinya order_id, user_name, item_name, date
//   //select where user_id == user_id
//   //input user_id
//   //output dalam bentuk list? isinya foto item, item_name, harga , status(udh dibayar apa belom)
// })

// app.get('/mybusiness', (req, res) => { //butuh tabel mybusiness user_id, item_id, 
//   db.select('id').from('users')
//   //select where user_id && item_id == user_id d&& item_id
//   //input user_id dan item_id
//   //output dalam bentuk list? isinya foto item, item_name, harga
//   //dari mybusiness kudu bisa update info item nya di /edititem/:id
// })

// app.put('/myitems', (req, res) => {

//   //button ganti, termasuk foto dan text
//   //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
//   //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

// })

// app.get('/myitems', (req, res) => {
//     db.select('pemesan', 'item_date', 'status').from('items')
//     .where('email', '=', req.body.email)
//     .then(data => {
//       const isValid = bcrypt.compareSync(req.body.password, data[0].password);
//       if (isValid) {
//         return db.select('*').from('users')
//           .where('email', '=', req.body.email)
//           .then(user => {
//             res.json(user[0])
//           })
//           .catch(err => res.status(400).json('unable to get user'))
//       } else {
//         res.status(400).json('wrong credentials')
//       }
//     })
//     .catch(err => res.status(400).json('wrong credentials'))
//   //button ganti, termasuk foto dan text
//   //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
//   //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

// })

// app.delete('/myitems', (req, res) => {
//   //button ganti, termasuk foto dan text
//   //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
//   //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

// })

//ini tar dulu

// app.put('/profile/:id', (req, res) => {
//   //button ganti, termasuk foto dan text
//   //input nama, alamat, rekening, foto user(?)
//   //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

// })

// app.delete('/profile/:id', (req, res) => {
//   //bikin tabel rekening gak sih(?) isinya user_name, sama rekening
//   //button ganti, termasuk foto dan text
//   //input nama, alamat, rekening, foto user(?)
//   //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

// })



// // /image gausah
// app.put('/image', (req, res) => {
//   const { id } = req.body;
//   db('users').where('id', '=', id)
//   .increment('entries', 1)
//   .returning('entries')
//   .then(entries => {
//     res.json(entries[0]);
//   })
//   .catch(err => res.status(400).json('unable to get entries'))
// })

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})