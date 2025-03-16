const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("7738145156:AAFx38-yslICRQty4vwOj-52un7NhSHpdJk")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there you'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))