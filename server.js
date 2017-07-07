var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get(['/', '/signup', '/signin'], function (req, res) {
    res.render('index')
})

app.listen(3000, function(err) {
    if(err) return console.log('Error!'), process.exit(1);

    console.log('Picgram on port 3000');
})