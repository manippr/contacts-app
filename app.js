const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('index');
});

app.listen(3000,() => {
  console.log("Server started and listening in port 3000");
});
