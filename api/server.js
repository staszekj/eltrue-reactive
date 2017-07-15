let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 8080;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/api', require('./router'));
app.use('/', express.static('public'));

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:' + port + '/');
});
