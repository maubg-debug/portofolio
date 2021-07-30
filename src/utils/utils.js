const fs = require("fs");

exports.sendTemplate = function (file, cb) {

    var callback = cb;
    
    fs.readFile(`src/templates/${file}.html`, 'utf-8', (err, data) => {
        if (err) throw err;
    
        callback(data.toString())
    })
};
