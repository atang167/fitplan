const express = require('express');
const parser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');

const router = require('./router');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
// app.use(cors());
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, '../client/static')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/static', 'index.html'));
})

server.listen(PORT, () => console.log('listening on port ' + PORT));


