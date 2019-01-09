const express = require('express');
const hbs = require('hbs');

const app = express();

var port = process.env.PORT || 3000;

app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('index');
});

app.listen(port,() => {
  console.log(`Server started and listening in port ${port}`);
});
