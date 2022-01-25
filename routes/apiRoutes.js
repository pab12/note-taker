// const {notes} = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const notes = require('../db/db.json');
const asyncRead = util.promisify(fs.readFile);


router.get('/notes', (req,res) => {
  // res.json(notes);

  asyncRead('db/db.json', 'utf8').then(data => {
console.log(data);
res.json(JSON.parse(data));
  }).catch(err=> {
   return res.json(err);
  })
});


// router.delete('/notes/:id', (req,res) => {
//   let id = req.params.id;


// })

router.post('/notes', (req, res) => {
  let randomNum = Math.random().toString(36).substr(2,9);
  let id = randomNum + Date.now();
  
let newNote = {
  id: id,
  title: req.body.title,
  text: req.body.text
} ;


notes.push(newNote);
const test = JSON.stringify(notes);

  fs.writeFile('db/db.json', test, (err) => {
    if (err) {
      return res.json(err);
    }

    
  });
});


module.exports = router;