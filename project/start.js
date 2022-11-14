var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/who_we_are', function(request, response) {
  response.render('pages/who_we_are');
});

app.get('/get_involved', function(request, response) {
  response.render('pages/get_involved');
});

app.get('/start_hiring', function(request, response) {
  response.render('pages/start_hiring');
});

// app.get('/find_support', function(request, response) {
//   response.render('pages/find_support');
// });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
