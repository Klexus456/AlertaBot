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

const CHANNEL_ID = "1497001559673016563";
const ROLE_ID = "1407510732626460702";

// Mensajes normales
const mensajes = [
  "tin tin tin, es la hora de tirar",
  "apurense tiren antes que adan",
  "dale gordo tira ya",
  "¡TIRADAS LISTAS! (ruido de pene de fondo)",
  "Agus dejó los fideos para avisar que ya podés tirar",
  "¡Reset activado! Hora de farmear amor y decepción",
  "Abriste mudae… mudae te abrió a vos",
  "El RNG te está mirando… y se está tocando",
  "Tiradas disponibles… Caleb recuerda cuando era feliz",
  "Se habilitaron las tiradas: Dante oliendo personajes masculinos",
  "Tiradas activas… demostración en vivo de quién tiene suerte y quién no",
  "Caleb susurra: “borren mudae”"
];

// Mensajes últimos rolls
const mensajesUltimos = [
  "ÚLTIMOS ROLLS antes del reset",
  "AHORA O NUNCAAA",
  "última chance gente",
  "Tiradas disponibles… activá el modo toro o llorá",
  "Ultimas tiradas. Si no tirás ahora, te aparece el UwU musculoso",
  "El RNG se volvió simp de Adán para estas ultimas tiradas",
  "TIRADAS LISTAS (una voz susurra “pene…” desde el vacío)",
  "Tiradas listas… Adán ya está desnudo (de felicidad)",
  "WEEEY ya están las ultimadas tiradas, caiganle antes que valga vrg",
  "El RNG dejó de ser aleatorio… ahora te odia personalmente"
];

// GIFs normales
const gifs = [
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/youshouldrollnow.png",
  "https://klipy.com/gifs/mudae-mudae-bot-7--k01KPYA1G9S58VZDBY15HN6EDKZ",
  "https://tenor.com/view/koishi-komeiji-hata-no-kokoro-mudae-rolls-rolls-reset-gif-5709035038960353291",
  "https://klipy.com/gifs/mudae-mudae-rolls-4--k01KPY9Y07N4QWKDPTAW15G46FY",
  "https://klipy.com/gifs/indiehome-mudae--k01KPY9Y07N4QWKDPTAW15G46FY",
  "https://klipy.com/gifs/mudae-mudae-discord--k01KPYA9TG37XZQRVP7VC0Q44GG",
  "https://klipy.com/gifs/smt-shin-megami-tensei-12",
  "https://klipy.com/gifs/no-kakera-mudae",
  "https://tenor.com/eUJuuuy7OlQ.gif",
  "https://tenor.com/qs6vqhvqgaw.gif",
  "https://tenor.com/cQRI6SwyOJW.gif",
  "https://tenor.com/qKg8xOzFtVP.gif",
  "https://tenor.com/jezW961b2YV.gif",
  "https://tenor.com/lIDr92DwI8k.gif",
  "https://tenor.com/bsHk7bjNE3j.gif",
  "https://tenor.com/iVsVD7r6JDs.gif",
  "https://tenor.com/bWzq3.gif",
  "https://tenor.com/bDCRbvfh7wJ.gif",
  "https://tenor.com/mZU0Epd7ZN6.gif",
  "https://tenor.com/hz9eHVC5aSC.gif",
  "https://tenor.com/bBqEd.gif",
  "https://tenor.com/gyddNiSddv4.gif",
  "https://tenor.com/b0aTrXbBDuM.gif",
  "https://tenor.com/fLfCp5v5FTO.gif",
  "https://tenor.com/f3M6H8nppBX.gif"
];

// GIFs últimos rolls
const gifsUltimos = [
  "https://klipy.com/gifs/poopeaters-mudae-claim-reset--k01KPY8NFHMNA4FT517J561VGR7",
  "https://tenor.com/view/rene-barblesnarg-mudae-kakera-rolls-reset-gif-9698949212354405690",
  "https://klipy.com/gifs/mudae-rolls-11--k01KPYA9TG37XZQRVP7VC0Q44GG",
  "https://klipy.com/gifs/mudae-mudae-rt--k01KPYA1G9S58VZDBY15HN6EDKZ",
  "https://klipy.com/gifs/claim-rolls",
  "https://tenor.com/q6paZdnDpw7.gif",
  "https://tenor.com/lIDr92DwI8k.gif",
  "https://tenor.com/no3BrlpgRhA.gif",
  "https://tenor.com/ACTQHHjX2L.gif",
  "https://tenor.com/bQ9Id.gif",
  "https://tenor.com/bNjx7.gif",
  "https://tenor.com/b8qWi8bGlPC.gif",
  "https://tenor.com/gKBDOPyDDWn.gif",
  "https://tenor.com/cOUy3AUGLcE.gif"
];

client.once("ready", () => {
  console.log("Bot listo");

  setInterval(() => {
    const now = new Date();

    // Ajuste a hora Argentina (UTC-3)
    const hora = (now.getUTCHours() - 3 + 24) % 24;
    const minuto = now.getMinutes();

    //log
    //console.log(`Hora actual: ${hora}:${minuto}`);
    
    // Bloque horario: no enviar entre 1 AM y 8 AM
    if (hora >= 1 && hora < 8) {
      console.log("Horario bloqueado, no se envía mensaje");
      return;
    }
    
    // Solo en minuto 48
    if (minuto !== 48) return;

    const channel = client.channels.cache.get(CHANNEL_ID);
    if (!channel) return;

    //  Detectar últimos rolls
    if (hora % 3 === 1) {

      const mensaje = mensajesUltimos[Math.floor(Math.random() * mensajesUltimos.length)];
      const gifRandom = gifsUltimos[Math.floor(Math.random() * gifsUltimos.length)];

      channel.send(`<@&${ROLE_ID}> ${mensaje}\n${gifRandom}`);

      console.log("Mensaje de últimos rolls enviado");
      return;
    }

    //  Mensaje normal
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    const gifRandom = gifs[Math.floor(Math.random() * gifs.length)];

    channel.send(`<@&${ROLE_ID}> ${mensaje}\n${gifRandom}`);

    console.log("Ping normal enviado");

  }, 60000);
});

client.login(process.env.TOKEN);

process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
