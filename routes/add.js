var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var name = req.query.name;
	var description = req.query.description;
	
	data['friends'].push( {"name":name,"description":description, imageURL: ""} );
	
	res.render('index', data);
	console.log(data);


	// Your code goes here
}