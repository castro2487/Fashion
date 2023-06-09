'use strict';

const fs = require('fs');

function loadJSONFile(path) {
  const rawdata = fs.readFileSync(path, 'UTF8');
  const parsed = JSON.parse(rawdata);
  return parsed;
}

module.exports = loadJSONFile;
