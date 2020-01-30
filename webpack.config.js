const path = require('path')
console.log(__dirname);
module.exports = {
    entry : "./src",
    output : {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: "bundle.js"
    }
}