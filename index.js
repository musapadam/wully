import Discord from 'discord.js';
import fs from 'fs';
import * as config from './config.json' assert { type: 'json' };
import http from 'http';
import express from 'express';

const client = new Discord.Client({
  shards: "auto",
  intents: 32767,
});

const token = config.default.TOKEN

client.commands = new Discord.Collection();

let events = fs.readdirSync("./events/")

events.forEach(async (event) => {
  let event_file = await import(`./events/${event}`).then(x => x.default);
  client.on(event_file.name, event_file.execute)
  console.log(`"${event_file.name}" eventi dinleniyor`)
})

let commands = fs.readdirSync("./commands/")

commands.forEach(async (command) => {
  let command_file = await import(`./commands/${command}`)
  client.commands.set(command_file.data.name, command_file)
  console.log(`"${command_file.data.name}" komutu yüklendi`)
})

if (!token) {
  console.log("Bu Proje Glitch Özel Uyarlanmıştır .env Dosyasına Discord Bot Tokeninizi Yazınız!")
} else {
  client.login(token).catch(e => {
    console.log("Projeye Yazılan Token Hatalı veya Discord Botunuzun Intentleri Kapalı!")
  })
}

const app = express();

app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

export default client;