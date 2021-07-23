const Bot = require('node-telegram-bot-api')

const bot = new Bot(process.env.TOKEN, { polling: true })

bot.onText(/\/start/, msg => {
	console.log(msg)
})

bot.on('message', msg => {
	console.log(msg)

	bot.forwardMessage('-524111235', msg.from.id, msg.message_id)
})