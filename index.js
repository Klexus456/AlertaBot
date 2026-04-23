const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot activo");
}).listen(PORT, () => {
  console.log("Servidor web activo en puerto", PORT);
});

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const CHANNEL_ID = "1496666032557785199";
const ROLE_ID = "1496666722529443920";

client.once("ready", () => {
  console.log("Bot listo");

  setInterval(() => {
    const now = new Date();

    const hora = now.getHours();
    const minuto = now.getMinutes();

    //  Bloque horario (1 AM a 6 AM)
    //if (hora >= 1 && hora < 6) return;

    //  Solo ejecuta en el minuto 48
    if (minuto === 48) {
      const channel = client.channels.cache.get(CHANNEL_ID);
      if (!channel) return;

      channel.send(`<@&${ROLE_ID}> emmm amigo deberias tirar en mudae mmmmm`);
      console.log("Ping enviado");
    }

  }, 60000); // revisa cada minuto
});

client.login(process.env.TOKEN);

process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
