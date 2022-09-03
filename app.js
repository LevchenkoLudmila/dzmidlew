const express = require('express');
const multer  = require('multer')
const path = require('path');const crypto = require('crypto');
const fs = require('fs');
const server = express();
 //const createPath = (page) = path.resolve(__dirname, 'views',`${page}.html`);
 server.set('view engine', 'ejs');
 server.set('views','./views');


server.use(express.static('public'));
//server.use(multer({dest:'uploads'}).single('filedata'));


const upload = multer({ dest: './public/data/uploads/' })
// server.post('/stats', upload.single('uploaded_file'), function (req, res) {
  
//    console.log(req.file, req.body)
// });

server.get('/form', (req, res) => {
  res.render('form');
})

server.post('/upload', function (req, res, next) {
  let filedata = req.file;
  console.log(filedata);    
});

server.post('/upload1', function (req, res, next) {
 
const fileBuffer = fs.readFileSync(req.file.path);
const hashSum = crypto.createHash('sha256');
hashSum.update(fileBuffer);

const hex = hashSum.digest('hex');

console.log('show hex', hex);

fs.rename(req.file.path, `./uploads/${hex}.jpg`, (err) => {
    if (err) throw err;
    console.log('renamed complete');
  });    
});

server.get('/uploads/:name', (req,res) => {
  res.send('req.file');
 })

//  server.get('/pages',(req,res) =>{
//   res.render('index');
//  });
// server.get('/pages/contacts',(req,res) =>{
//     const contacts = [
//       {name: 'YouTube', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//       {name:'Twiter', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//       {name:'GitHub', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//     ];
//    res.render('contacts', { contacts });
//  });
// server.get('/posts/:id',(req,res) =>{
// //    res.render(createPath('post'));
//       res.render('post');
//  });
// server.get('/posts',(req,res) =>{
//   res.render('posts');
//  });
// server.get('/add-posts',(req,res) =>{
//    res.render('add-posts');
//  });
// server.get('/about-us',(req,res) =>{
//    res.redirect('/contacts');
//  });
 
// server.use((req,res) =>{
//    res.statusCode = 404;
//    res.render('error');
//  });

 server.listen(3000);