const { Telegraf } = require("telegraf");

const TOKEN = "8226618927:AAGudmbmQ0JtZjqEsdgY3-XxsFu8-xmZvWw";
const bot = new Telegraf(TOKEN);
const web_link = "https://burger-plus.vercel.app/";

bot.start((ctx) => {
  ctx.reply("Assalomu aleykum, Buyurtma berish tugmasi orqali menyuga o'ting", {
    reply_markup: {
      keyboard: [
        [
          { text: "Buyurtma berish", web_app: { url: web_link } } // Web App button
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  }).then(r => console.log(r));
});

bot.launch();
