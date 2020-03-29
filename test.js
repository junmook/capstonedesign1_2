const express = require('express');
const app = express();
const querystring = require('querystring');
//const qs = querystring();
const port = 8000;
function getClientIP(req){
	return (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
}
app.get('/get', function(req, res){
//	var user_id = req.param('xx');
//	var user_name = req.param('yy');
//	console.log(req.query);
	process.env.TZ = 'Asia/Seoul'
//	var currentDate = new Date().toLocaleString();
	var timezoneOffset = new Date().getTimezoneOffset()*60000;
	var currentDate = new Date(Date.now()-timezoneOffset).toISOString();
	currentDate = currentDate.replace(/T/, ' ').replace(/\..+/, '');

	var myip = getClientIP(req);
	myip = myip.substr(7);

	var a = {"stuno" : "20151597", "time" : currentDate, "ip" : myip, "email" : "junmook94@gmail.com"};
	var query = req.query;
	query.stuno = "20151597";
	query.time = currentDate;
	query.ip = myip;
	query.email = "junmook94@gmail.com";
	res.send(query);

});
app.use(express.json())
app.post('', function(req,res){
	process.env.TZ = 'Asia/Seoul'
	var timezoneOffset = new Date().getTimezoneOffset()*60000
	var currentDate = new Date(Date.now()-timezoneOffset).toISOString()
	currentDate = currentDate.replace(/t/, ' ').replace(/\..+/, '')

	var myip = getClientIP(req)
	myip = myip.substr(7)
	req.body.stuno = "20151597"
	req.body.ip = myip
	req.body.time = currentDate
	req.body.email="junmook94@gmail.com"
	res.json(req.body)
})
app.listen(port, () => console.log(`aaaaa ${port}`));
