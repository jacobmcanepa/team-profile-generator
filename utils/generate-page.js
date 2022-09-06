const fs = require("fs");

module.exports = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('test.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File was created!"
      });
    });
  });
};