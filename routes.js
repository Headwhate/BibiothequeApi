const express = require('express');
const router = express.Router()
const Livre = require("./schema")
const pug = require('pug');
const bodyParser = require('body-parser')

router.get("/", (request,response) => {
  response.render("layout")
});

router.get('/add', (request,response) => {
  response.render('add')
});

router.post('/add',(request,response) => {
  const livre = new Livre(request.body);
  console.log(request.body)
  livre.save((error) =>{

    if (error) {
       response.send(error);
    }
  next();
  })
    response.redirect('list')
})

  router.get('/list', (request, response) => {
    Livre.find((error, livres) => {
      if (error) {
        response.send(error);
      }
      response.render('/list', { livres });
    });
  });


module.exports =router
