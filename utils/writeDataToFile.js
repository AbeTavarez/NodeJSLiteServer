const fs = require('fs');

const writeDataToFile = (filenam, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  writeDataToFile,
};
