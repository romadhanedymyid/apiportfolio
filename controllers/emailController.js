const renderHelper      = require('../helpers/renderHelper')
const MailService       = require('../services/MailService')
const ConfigService     = require('../services/ConfigService')
const model             = require('../models/email')
const response          = require('../restapi')

let filename    = 'configs/config.yaml'
let config      = ConfigService.ParseConfig(filename)

Telegram                = require('node-telegram-bot-api')
const tokenTelegramBOT  = config.TOKEN_TELEGRAM_BOT
const botTelegram       = new Telegram(tokenTelegramBOT, { polling: true })

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


            botTelegram.sendMessage(
                chat_id = config.TOKEN_TELEGRAM_BOT_CHATID,
                text = "romadhanedy.my.id\n-------------------------------------------------------------------------------\n#NewMessage\n-------------------------------------------------------------------------------\n\nFrom :\n[" + body.recipient + "]\n" + body.params.bodyName + "\n\nMessage :\n" + body.params.bodyMessage + "\n\n-------------------------------------------------------------------------------"
            )

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