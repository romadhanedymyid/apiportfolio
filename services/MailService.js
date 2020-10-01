const nodemailer    = require('nodemailer')

exports.NewMailService = function (host, port, username, password) {
    let transport = nodemailer.createTransport({
        host: host,
        port: port,
        auth: {
           user: username,
           pass: password
        }
    })
    return transport
}

exports.SendMailService = async function (mailClient, sender, recipient, subject, bodyMail) {
  const message = {
      from    : sender,
      to      : recipient,
      subject : subject,
      html    : bodyMail
  }
  
  return mailClient.sendMail(message)
}