const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const express = require("express")
var oneLinerJoke = require('one-liner-joke');

const app = express()

const bot = new Telegraf("7738145156:AAFx38-yslICRQty4vwOj-52un7NhSHpdJk")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there you'))

bot.hears("send me a joke",(ctx) => ctx.reply(
    String(oneLinerJoke.getRandomJoke().body)

))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.get('/', function (req, res) {
    res.send('Hello World')
  })
const vare = oneLinerJoke.getRandomJoke()
console.log(vare)
  
app.listen(3000)