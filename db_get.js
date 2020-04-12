var express = require('express');
var app = express();
var util = require('util');
mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'junmook',
    password: 'wnsanr6425@',
    database: 'mydb'
})
connection.connect();


app.get("/select", function(req, res) {
  console.log("param=" + req.query);
  var qstr = ' ';
  var id = req.param('device_id');
  console.log(id);
  if(req.param('device_id')) {
	qstr = util.format('select * from sensors where device = %d ', req.param('device_id'));
  }
  else{
	qstr = 'select * from sensors ';
  }
  connection.query(qstr, function(err, rows, cols) {
    if (err) {
      throw err;
      res.send('query error: '+ qstr);
      return;
    }

    console.log("Got "+ rows.length +" records");
    html = ""
    for (var i=0; i< rows.length; i++) {
       html += JSON.stringify(rows[i]);
    }
    res.send(html);
  });

});

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('listening at http://%s:%s', host, port)
});
