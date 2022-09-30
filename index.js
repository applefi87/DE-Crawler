require('dotenv').config()
const fs = require('fs')
// const linebot = require('linebot');
const axios = require('axios').default;
const cheerio = require("cheerio");

// var bot = linebot({
//   channelId: CHANNEL_ID,
//   channelSecret: CHANNEL_SECRET,
//   channelAccessToken: CHANNEL_ACCESS_TOKEN
// });

// bot.on('message', function (event) {
//   event.reply(event.message.text).then(function (data) {
//     // success
//   }).catch(function (error) {
//     // error
//   });
// });

// bot.listen('/linewebhook', 3000);

// Make a request for a user with a given ID
const config = {
  headers: {
    header1: 1,
    header2: 2
  }
};
const url = "https://www.decathlon.tw/zh/hiking-c120649.html";

const data = {
  name: "Jake Taper",
  email: "taperjake@gmail.com"
}

const craw = async () => {
  const getHTML = async () => {
    try {
      const rep = await axios.get(url)
      // console.log(rep);
      return rep.data
    } catch (error) {
      console.log(error);
      return error
    }
  }
  const html = await getHTML()
  const $ = cheerio.load(html)
  console.log($.html());
  const infos = $('.special-price .price-label').toArray()
infos.map()
  // fs.writeFileSync('test.json', JSON.stringify(rep.data))
  // console.log(rep);
}
craw()