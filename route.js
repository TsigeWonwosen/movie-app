const express = require('express');
const { readFile } = require('fs').promises;

const jsonData = readFile('./package.json');

let employee = [
  { name: 'wonde', age: 23 },
  { name: 'chuchu', age: 30 },
  { name: 'Abel', age: 29 },
];

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now().toLocaleString());
  next();
});
router.get('/json', (req, res) => {
  res.status(200).json(employee);
});

router.get('/contact', (req, res) => {
  res.status(200).send('Contact Page');
});

router.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

router.all('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

module.exports = router;
