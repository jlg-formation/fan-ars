'use strict';

const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use('/app/', (req, res, next) => {
	res.sendFile('./app/index.html', { root: __dirname });
});

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(9000, function () {
	console.log('server started on port 9000');
});
