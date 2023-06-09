'use strict';

const fs = require('fs');
const loadJSONFile = require('./loadJSONFile');
const ENV_FILE_NAME = __dirname + '/../.env.production';

function TransformVaultSecrets() {
  const vaultConfig = loadJSONFile(process.env.VAULT_PATH);
  const envFileWriteStream = fs.createWriteStream(ENV_FILE_NAME, {
    flags: 'w', // 'w' means (old data will be replaced)
  });

  Object.keys(vaultConfig).forEach(function (key) {
    let value = vaultConfig[key];

    if (value instanceof Array || value instanceof Object) {
      value = JSON.stringify(value);
    }

    const line = `${key}=${value}\n`;

    envFileWriteStream.write(line);
  });

  envFileWriteStream.end();
}

module.exports = TransformVaultSecrets();
