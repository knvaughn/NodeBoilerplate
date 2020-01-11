var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('*', function(req, res){
    res.send('Sorry... page not found');
});

app.listen(3000, function(){
    console.log('Starting app on port 3000...');
});