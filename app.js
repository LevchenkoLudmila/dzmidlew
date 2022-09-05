const express = require('express');
const multer = require('multer')
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const objHash = require ('object-hash') ;

const server = express();

 server.listen(3000);
 server.set('view engine', 'ejs');
 server.set('views','./views');
 
server.use(express.static('public'));
server.use(multer({dest:'uploads'}).single('filedata'));

// server.get('/form', (req, res) => {
//   res.render('form');
// });

// server.get('/uploads/:name', (req,res) => {
//   res.send('req.file');
//  })
 server.get('/',(req,res) =>{
  res.render('index');
 });
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

 //кфбота с формой

 //404 if mistake
// server.use((req,res) =>{
//    res.statusCode = 404;
//    res.render('error');
//  });