"use strict";

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/sports', (request, response) => {
	response.json(['Weightlifting', 'Cycling']);
})

app.listen(8181, ()=> { console.log('listening on 8181'); });