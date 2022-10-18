let server = require("http").createServer((req,res) => {
    res.end("our backend")
})
let fs = require("fs")

fs.writeFile("/abux.txt","text",() => console.log("text created"))
server.listen(process.env.PORT || 5000) 
const TelegramBot = require('node-telegram-bot-api');
const axios = require("axios")

const token = process.env.token;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message',(msg) => {
  const chatId = msg.chat.id;

const options = {
  method: 'GET',
  url: 'https://bing-image-search1.p.rapidapi.com/images/search',
  params: {q: `${msg.text}`},
  headers: {
    'X-RapidAPI-Key': '7ef503c794msh4579a838b8955b5p1050a8jsn1659cfb9803d',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	response.data.value.forEach((itm,i)=> {
	    if(i < 4) {
	    let url = itm.thumbnailUrl;
	    bot.sendPhoto(chatId, url);
	    }
	})
	
	
}).catch(function (error) {
	console.error(error,"axios error");
});

});
