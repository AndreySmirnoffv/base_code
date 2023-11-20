require('dotenv').config({path: "./assets/modules/.env"})
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(process.env.devStatus ? process.env.TEST_TOKEN : process.env.DEFAULT_TOKEN)
const db = require('./assets/db/db.json')
const fs = require('fs')
const { startKeybaord } = require('./assets/keyboard/keyboard')

bot.on('message', async msg => {
    if (msg.text === '/start'){
        let user = db.filter(x => x.username === msg.from.username)
        if (!user){
            db.push({
                id: msg.chat.id,
                username: msg.from.username,
                first_name: msg.from.first_name,
                last_name: msg.from.last_name,
            })
            fs.writeFileSync('./assets/db/db.json', JSON.stringify(db, null, '\t'))
        }
        await bot.sendMessage(msg.chat.id, `Привет ${msg.from.username}`, startKeybaord)
        
    }else{
        await bot.sendMessage(msg.chat.id, `Привет ${msg.from.username}`, startKeybaord)
    }
})

bot.on('callback_query', async msg => {
    if (msg.data === 'callbackdata'){

    }else if (msg.data === 'callbackdata'){

    }else {
        await bot.sendMessage(msg.chat.id, "таких данных не существует")
    }
})

bot.on('polling_error', console.log)