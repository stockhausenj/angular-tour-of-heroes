#!/usr/bin/env node

'use strict';

var nano = require('nano')('http://stockhausenj:couchdb@104.198.175.239:5984');
nano.db.create('books', function (err, body, headers) {
	if (err) {
		console.log(err)
	} else {
		console.log('DB created!')
	}
});
var books = nano.db.use('books');
// Insert a book document in the books database
books.insert({ name: 'The Art of war' }, null, function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
})

// Get a list of all books
books.list(function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body.rows)
  }
})

const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

let port = 8080;
app.listen(process.env.PORT || port);
console.log('App listening on port: ' + port);

