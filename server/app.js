"use strict";

let express = require('express');
let app = express();
let mongoUtil = require('./mongoUtil');

mongoUtil.connect();

app.use(express.static(__dirname + '/../client'));

app.get('/sports', (request, response) => {
	let sports = mongoUtil.sports();
	sports.find().toArray((err, docs)=>{
		let sportsNames = docs.map((sports)=> sports.name);
		response.json(sportsNames);
	})
})

app.listen(8181, ()=> { console.log('listening on 8181'); });