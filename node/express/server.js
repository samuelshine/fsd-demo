const express = require('express');
const app = express();

app.use(express.static('views'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

app.get('/home', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.use((req, res) => {
  res.status(404).render('error', { title: '404 Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});