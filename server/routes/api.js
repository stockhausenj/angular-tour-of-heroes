const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/items', (req, res) => {
	var MongoClient = require('mongodb').MongoClient

	let fs = require('fs');
  let creds = fs.readFileSync(path.join(__dirname, '/../mongodb.creds'));
	let jsonContent = JSON.parse(creds);
	let user = jsonContent.user;
	let pwd = jsonContent.pwd;

	MongoClient.connect('mongodb://' + user + ':' + pwd + '@35.188.62.113:27017/heroes', function (err, db) {
		if (err) throw err

		db.collection('heroes').find().toArray(function (err, result) {
			if (err) throw err

      let heroes = {}
      heroes['results'] = result;
      res.send(heroes);
		})
		})
});

module.exports = router;
