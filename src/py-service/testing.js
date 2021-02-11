var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log('server running on port 3000');

})

app.get('/name', callName);

function callName(req, res){
    var spawn = require('child_process').spawn;

    var pyProc = spawn('python',["./testLink.py",
                                  req.query.firstname,
                                  req.query.lastname] );
    pyProc.stdout.on('data',function(data) {
        console.log(data.toString());
        console.log('seperate return')
    } )
}