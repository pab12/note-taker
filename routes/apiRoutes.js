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


router.delete('/notes/:id', (req,res) => {
  let id = req.params.id;


})

router.post('/notes', (req, res) => {
let newNote = {
  title: req.body.title,
  text: req.body.text
} ;


notes.push(newNote);

  fs.writeFile('db/db.json', notes, (err) => {
    if (err) {
      return res.json(err);
    }

    res.json(JSON.stringify(notes));
  });
});


module.exports = router;