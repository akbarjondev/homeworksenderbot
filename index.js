const Bot = require('node-telegram-bot-api')

const bot = new Bot(token, { polling: true })

bot.onText(/\/start/, msg => {
	console.log(msg)
})