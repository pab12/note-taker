//const {notes} = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');
const util = require('util');

const asyncRead = util.promisify(fs.readFile);


router.get('/notes', (req,res) => {
  // res.json(notes);

  asyncRead('db/db.json', 'utf8').then(data => {
console.log("fdoasihdgifha",data);
res.json(JSON.parse(data));
  }).catch(err=> {
   return res.json(err);
  })
});


router.delete('/notes/:id', (req,res) => {
  let id = req.params.id;


})

router.post('/notes', (req, res) => {

});


module.exports = router;