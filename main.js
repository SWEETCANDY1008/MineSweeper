var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./public/template/template.js');
var mine = require('./public/js/mine.js')

app.use(express.static(__dirname + '/public'));
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', function(request, response) {
	// 지뢰찾기 메인 function
	// 메인 Page 작성
    var html = template.MAIN(mine.main());
    response.send(html);
});
   
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});



