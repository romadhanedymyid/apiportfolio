const renderHelper      = require('../helpers/renderHelper')
const MailService       = require('../services/MailService')
const ConfigService     = require('../services/ConfigService')
const model             = require('../models/email')
const response          = require('../restapi')

let filename    = 'configs/config.yaml'
let config      = ConfigService.ParseConfig(filename)

module.exports = {
    sendMail: async (req, res) => {
        const body = req.body
        try {

            const sender = config.SMTP.username

            let mailService = MailService.NewMailService(
                config.SMTP.host,
                config.SMTP.port,
                config.SMTP.username,
                config.SMTP.password
            )

            // load template 
            let template   = await model.getTemplate()

            // render template
            let parsed = renderHelper.render(template, body.params)

            // send mail
            let _sendMail = await MailService.SendMailService(mailService, sender, body.recipient, body.subject, parsed.html)

            return response.ok(_sendMail, res)
        }
        catch (err) {
            console.log(err)
            return response.error(_sendMail)
        }
    },
    
}