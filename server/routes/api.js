const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();
const fs = require('fs');
const creds = fs.readFileSync(path.join(__dirname, '/../mongodb.creds'));
const jsonContent = JSON.parse(creds);
const user = jsonContent.user;
const pwd = jsonContent.pwd;
const server = jsonContent.server;
const url = 'mongodb://' + user + ':' + pwd + '@' + server + '/heroes';

router.get('/items', async(req, res) => {
	try {
		const db = await MongoClient.connect(url);
		const docs = await db.collection('heroes').find().toArray();
		const heroes = {};
		heroes['results'] = docs;
		res.send(heroes);
	} catch(error) {
		console.error(error);
	}
});

module.exports = router;
