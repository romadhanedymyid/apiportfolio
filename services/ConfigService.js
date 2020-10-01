const yaml          = require('js-yaml'),
fs                  = require('fs')

exports.ParseConfig = function (filename) {
    return yaml.safeLoad(fs.readFileSync(filename, 'utf8'))
}