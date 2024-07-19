const http = require('http');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();


// const server = http.createServer((request, response) => {
//   // content-length формируется автоматически!
//   response.setHeader('Content-Type', 'text/html')
// //   response.setHeader('Content-Type', 'text/javascript')

//     if(response.url = '/') {
//         fs.readFile('./index.html', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 response.end();
//             } else {
//                 response.write(data);
//                 response.end();
//             }
//         })
//     }  
// });

const createPath = (page) => path.resolve(__dirname, `${page}.html`)
app.use(express.static(__dirname + '/public'));
const port = 8080;
app.listen(port, () => {
  console.log('Server has been started');
});

app.get('/', (request, response) => {
    response.sendFile(createPath('index'))})
    