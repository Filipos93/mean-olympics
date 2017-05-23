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
});

app.get('/sports/:name', (request, response) => {
	let sportName = request.params.name;
	console.log('sport name: ', sportName);
	let sport = {
		"name" : "Cycling",
		"goldMedals": [{
			"division": "Men's Sprint",
			"country": "UK",
			"year" : 2017
		},
		{
			"division": "Women's sprint",
			"country": "Poland",
			"year" : 2017
		}]

	};
	response.json(sport);
})

app.listen(8181, ()=> { console.log('listening on 8181'); });