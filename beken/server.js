const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const db = knex({
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



app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
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
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
})

app.get('/home', (req, res) => { //ini get apa post ya?
  const{ category } = req.params;
  db.select('*').from('items').where({category}) //belom tau cara .where('category', '=', req.params) (?)
    .then(item => {
        //output nya pindah ke category terus nampilin cards info berdasarkan category
      //if()...
    })
})


app.post('/forgotpass', (req, res) => {
  //input email
  //output link reset(?)

})

app.post('/category', (req, res) => {
  //input category dari /home
  //output cards info item berdasarkan category

})

app.post('/item/:id', (req, res) => {
  //input date, time
  //output date, time yang avaliable, alamat, foto item, CP
  //pas klik pesan muncul pop up
  //pop up item name, item date and time yang dipilih, harga
})



app.post('/myorder', (req, res) => {
  //belom dibayar
  //input foto trf (ada button upload)
  //output nama user, cards info(tempat, tanggal, jam, harga, status pemesanan), rekening yang punya 
  //kalo udh upload ada pop up/ console.log('terima kasih sudah membayar')
  //udah dibayar
  //input click pindah tangan sama cetak bukti
  //output pindah halaman ke /handover sama download pdf bukti pembayaran
})

app.put('/handover', (req, res) => {
  //input nama baru sama button cetak bukti
  //output cetak bukti dengan nama yang baru
})


app.get('/profile/:id', (req, res) => { 
  //tambahin foto profil, nama, email , telepon
  //harus bisa di edit juga foto, nama, email, telpon -nya
  //input button order history sama mybusiness
    const { id } = req.params; 
    db.select('*').from('users').where({id})
    .then(user => { 
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
})

app.post('/orderhistory', (req, res) => {
  //input user_id
  //output dalam bentuk list? isinya foto item, item_name, harga , status(udh dibayar apa belom)
})

app.post('/mybusiness', (req, res) => {
  //input user_id dan item_id
  //output dalam bentuk list? isinya foto item, item_name, harga
  //dari mybusiness kudu bisa update info item nya di /edititem/:id
})

app.put('/edititem/:id', (req, res) => {
  //button ganti, termasuk foto dan text
  //input item_name, item_alamat, user_rekening, foto)item, foto_buktitrf
  //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

})

app.put('/editprofile/:id', (req, res) => {
  //button ganti, termasuk foto dan text
  //input nama, alamat, rekening, foto user(?)
  //output tabel yang isinya nama pemesan,date pesanan, foto trf, status(checkbox)

})



// /image gausah
app.put('/image', (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
