#!/usr/bin/env node

'use strict';

const express = require('express');
const path = require('path');
const api = require('./routes/api');
let app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

let port = 8080;
app.listen(process.env.PORT || port);
console.log('App listening on port: ' + port);
