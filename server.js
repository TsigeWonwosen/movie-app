const fs = require('fs').promises;
const http = require('http');
const express = require('express');
const path = require('path');

const mainRouter = require('./route');

function removeProperty(obj, prop) {
  let res = Object.values(obj);
  let hasInclude = res.includes(prop);

  if (hasInclude) {
    return true;
  } else {
    return false;
  }
}

function sumOf(data) {
  let arrayOfId = data.split('');

  let sum = arrayOfId.reduce(
    (total, initial) => (total += parseInt(initial)),
    0,
  );

  if (sum < 10) {
    console.log('>> ' + sum);
    return sum;
  } else {
    return sumOf(sum.toString());
  }
}

function idExchangeDigit(id) {
  let result = sumOf(id);
  return result;
}

function filterIt(arr, searchKey) {
  return arr.filter((obj) => Object.values(obj).includes(searchKey));
}

let empoloyee = [
  { name: 'wonde', age: 23 },
  { name: 'chuchu', age: 30 },
  { name: 'Abel', age: 29 },
];

//console.log(idExchangeDigit('55555'));
// console.log(removeProperty(empoloyee, 'wonde'));

// console.log(filterIt(empoloyee, 30));

let student = { fname: 'SELEZIONA', name: '', age: '', size: '', typ: '' };

let isResult =
  student.fname !== 'SELEZIONA' &&
  student.name !== 'd' &&
  student.age !== 's' &&
  student.size !== 'd' &&
  student.type !== 'd';

// console.log(isResult);

const getText = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await fs.readFile(url, 'utf8');
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const resultFileRead = async () => {
  let result;
  try {
    result = await getText('./package.json');
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result;
};

// resultFileRead();
const homePage = fs.readFile('./public/index.html');
const server = http.createServer(async (req, res) => {
  const data = await resultFileRead();
  let id = await req.url;
  if (id === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`<h1> Home page</h1>`);
    res.write(homePage);
    res.end();
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.write(`<h1> About Page ${id}</h1>`);
    res.write(data);
  }
  res.end('Footer');
});

server.listen(5000, () => {
  console.log('Server is listening at port 5000');
});

const app = express();

// setup static and Middleware
app.use(express.static('./src/img'));

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});
// app.use(express.json())
app.use('/', mainRouter);

app.get('/file', (req, res) => {
  res.sendFile(path.resolve(__dirname, './README.md'));
});

app.listen(8000, () => {
  console.log('Server is listening at port 8000');
});
