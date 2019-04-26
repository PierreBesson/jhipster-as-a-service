#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const uuid = require('uuid/v4');
const shelljs = require('shelljs');

var upload = multer(); // for parsing multipart/form-data

const app = express();

app.use(bodyParser.text({type:"*/*"}));

app.post('/', upload.array(), (req, res, next) => {
  console.log('Received JDL file:\n' + req.body);

  // Create temp directory and cd into it
  const id = uuid();
  const tmpDir = `/tmp/${id}`
  shelljs.mkdir(tmpDir)
  shelljs.cd(tmpDir);
  console.log('Successfully create temp directory: ' + tmpDir)

  // Write the JDL to a file
  const jdlFilePath = `/tmp/${id}/application.jdl`;
  fs.writeFileSync(jdlFilePath, req.body)
  console.log('Successfully writen JDL file to disk: ' + jdlFilePath)

  // Generate the app from JDL
  console.log('Running jhipster import-jdl application.jdl...')
  shelljs.exec('/usr/local/bin/jhipster import-jdl application.jdl --skip-insight --skip-checks --skip-git --skip-install')
  console.log('Successfully generated app !')

  shelljs.exec('zip -r application.zip .');
  const zipFilePath = `${tmpDir}/application.zip`;
  console.log('Successfully created zip at: ' + zipFilePath)

  // Return zip file
  res.download(zipFilePath);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('JHipster Function listening on port', port);
});