const { Telegraf } = require("telegraf");

const TOKEN = "8226618927:AAGudmbmQ0JtZjqEsdgY3-XxsFu8-xmZvWw";
const bot = new Telegraf(TOKEN);
const web_link = "https://burger-plus.vercel.app/";
bot.start((ctx) => {
  ctx.reply(`Assalomu aleykum`, {
    reply_markup: {
      inline_keyboard: [[{ text: "Bizning sayt", web_app: { url: web_link } }]],
      resize_keyboard: true
    },
  }).then(r => console.log(r));
});
bot.launch();