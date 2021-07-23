const Bot = require('node-telegram-bot-api')
require('dotenv').config()

const bot = new Bot(process.env.TOKEN, { polling: true })

bot.onText(/\/start/, msg => {
	bot.sendMessage(msg.from.id, `Assalomu alaykum ${msg.from.first_name} 🤓\nUyga vazifangizni menga yuboravering, faqat Ustozga ko'rsataman xolos 😅`)
})

bot.on('message', msg => {
	if(msg.document) {
		bot.forwardMessage('-524111235', msg.from.id, msg.message_id)
	}
})