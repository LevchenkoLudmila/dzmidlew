const express = require('express');
const multer = require('multer');
//const localMulter = multer({dest:'uploads'}).single('filedata');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) =>{
//       cb(null, "uploads");
//   },
//   filename: (req, file, cb) =>{
//       cb(null, file.originalname);
//   }
// });
//const localMulter = multer({storage}).single('filedata');
const localMulter = multer({path:'uploads'}).single('filedata1');
//const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const objHash = require ('object-hash') ;
const Stream = require('stream');

const server = express();
const upload = multer();
 server.set('view engine', 'ejs');
 server.set('views','./views');
 
server.use(express.static('./public'));

 //работа с формой

//  server.post('/uploads', function (req, res, next) {

//   let filedata = req.file;
//   console.log(filedata);    
// });

server.post('/upload1',localMulter,(req, res, next)=> {
  console.log(req);

  // const getFile = async (req, res) => {

  //    const readStream = await fs.createReadStream(req.file.path);

  // }; 
  //  const fileBuffer = fs.readFile(req.file.path);

  // const hashSum = crypto.createHash('sha256');
  // hashSum.update(getFile);
  // const hex = hashSum.digest('hex');

  // stream.pipe(readStream);
  // stream.pipe(hex);

  // console.log('Nazva', hex);
  // fs.rename(req.file.path, `./uploads/${hex}`, (err) => {
  //     if (err) throw err;
  //     console.log('renamed complete');
  //   });    
});

server.get('/',(req,res) =>{
  res.render('form');
});
  
  // server.get('/form', (req, res) => {
  //   res.render('form');
  // });
  // server.get('/uploads/:name', (req, res) => {
  //     res.send(req.file);
  // }); 
 //отдать страницы
// server.get('/pages/contacts',(req,res) =>{
//     const contactsUs = [
//       {name: 'YouTube', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//       {name:'Twiter', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//       {name:'GitHub', link: 'https://www.youtube.com/channel/UCOSwcNzI2pkuaZVDQGLC65A/videos?view=0&sort=dd&shelf_id=0'},
//     ];
//    res.render('contacts', { contactsUs });
//  });
// server.get('/posts/:id',(req,res) =>{
// //    res.render(createPath('post'));//???????raznica dlya chego
//       res.render('post');
//  });
// server.get('/posts',(req,res) =>{
//   res.render('posts');
//  });
// server.get('/add-posts',(req,res) =>{
//    res.render('add-posts');
//  });
// server.get('/about-us',(req,res) =>{
//    res.redirect('contacts');
//  });

// 404 if mistake
// server.use((req,res) =>{
//    res.statusCode = 404;
//    res.render('error');
//  });
 server.listen(3000);