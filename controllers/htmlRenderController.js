const model             = require('../models/email')
const htmlRenderer      = require('../helpers/renderHelper')

module.exports = {
    htmlRender: async (template, params) => {
        try {
            return htmlRenderer.render(template, params)
        }
        catch (err) {
            console.log(err)
            return err
        }
    }
}
