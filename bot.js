Telegram = require('node-telegram-bot-api')
const dbot = require('dbot-js');
const token = '1373349118:AAFJi9teqoVonJKSgx0XnjRZqqoqpCklTXk';
const bot = new Telegram(token, { polling: true });

bot.on('message', (msg) => {
    console.log("Ada pesan")
    const chatId = msg.chat.id;
    var message = "Hello!"
    console.log(chatId)
    dbot.get_response(message, function(err, result){
        if(!err) {
            bot.sendMessage(chatId, message)
        }else{
            console.log(err)
        }
    });
});