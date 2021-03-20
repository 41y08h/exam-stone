const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, "extension")
    }
}