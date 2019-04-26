const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
const fs = require('fs');

var upload = multer(); // for parsing multipart/form-data

const app = express();

app.use(bodyParser.text({type:"*/*"}));

app.post('/', upload.array(), (req, res, next) => {
  console.log('Received JDL file:' + req.body);
  fs.writeFileSync('/tmp/application.jdl', req.body)
  
  res.send(`Succ ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('JHipster Function listening on port', port);
});