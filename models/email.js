const axios             = require('axios')
const ConfigService     = require('../services/ConfigService')

let filename    = 'configs/config.yaml'
let config      = ConfigService.ParseConfig(filename)

exports.getTemplate = async () => {

    const urlGetTemplate = config.TEMPLATE_EMAIL

    try {
        const getTemplate = await axios.get(urlGetTemplate)

        if (getTemplate) {
            return getTemplate.data
        }
    }
    catch (err) {
        return err
    }
}