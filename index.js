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

// ================= MENSAJES =================

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
  "https://tenor.com/f3M6H8nppBX.gif",
  "https://tenor.com/m4hEaEHawFk.gif",
  "https://tenor.com/cDj4le6YXcq.gif",
  "https://tenor.com/qjhUlXSjhu9.gif",
  "https://tenor.com/ejCBgO7Cyne.gif",
  "https://tenor.com/bWKZd.gif",
  "https://tenor.com/mq09XKU574F.gif",
  "https://tenor.com/bKzEh.gif",
  "https://tenor.com/iHMBG3ItOY5.gif",
  "https://tenor.com/iS34HHzX2pN.gif",
  "https://tenor.com/tUmh05ZE6Ud.gif",
  "https://tenor.com/cpPFTSEGLVP.gif",
  "https://tenor.com/mQl7Nxub7bB.gif"

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
  "https://tenor.com/cOUy3AUGLcE.gif",
  "https://tenor.com/etfYKs0hcla.gif",
  "https://tenor.com/vaUzMfTcov5.gif",
  "https://tenor.com/qTNRUIepjqa.gif",
  "https://tenor.com/bLt2J.gif",
  "https://tenor.com/bOd1h.gif",
  "https://tenor.com/ehSfZiKWNaS.gif",
  "https://tenor.com/cIS4Ig0QYZo.gif"
];

// ================= UTIL =================

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function enviarConReintento(channel, contenido) {
  for (let i = 1; i <= 3; i++) {
    try {
      console.log(`Intento ${i} de envío`);

      await channel.send(contenido);

      console.log("Mensaje enviado correctamente");
      return true;

    } catch (err) {
      console.error("Error enviando:", err.message);

      await sleep(3000);
    }
  }

  console.error("Fallaron todos los intentos");
  return false;
}

// ================= LÓGICA =================

async function ejecutarLogica() {
  if (!client.isReady()) {
    console.log("Bot no listo todavía");
    return;
  }

  const now = new Date();

  const hora = (now.getUTCHours() - 3 + 24) % 24;
  const minuto = now.getMinutes();

  console.log(`Hora actual: ${hora}:${minuto}`);

  if (hora >= 1 && hora < 8) return;
  if (minuto !== 48) return;

  let channel;

  try {
    channel = await client.channels.fetch(CHANNEL_ID);
  } catch {
    console.log("No se pudo obtener el canal");
    return;
  }

  if (!channel) return;

  let mensaje, gif;

  if (hora % 3 === 1) {
    mensaje = mensajesUltimos[Math.floor(Math.random() * mensajesUltimos.length)];
    gif = gifsUltimos[Math.floor(Math.random() * gifsUltimos.length)];
  } else {
    mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    gif = gifs[Math.floor(Math.random() * gifs.length)];
  }

  await enviarConReintento(
    channel,
    `<@&${ROLE_ID}> ${mensaje}\n${gif}`
  );
}

// ================= SCHEDULER =================

function iniciarScheduler() {
  function loop() {
    ejecutarLogica();

    const now = new Date();
    const msHastaProximoMinuto =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    setTimeout(loop, msHastaProximoMinuto);
  }

  loop();
}

// ================= EVENTOS =================

client.once("ready", () => {
  console.log("Bot conectado como", client.user.tag);
  iniciarScheduler();
});

client.on("disconnect", () => console.log("Desconectado"));
client.on("reconnecting", () => console.log("Reconectando"));
client.on("error", console.error);

// ================= LOGIN =================

client.login(process.env.TOKEN).catch(err => {
  console.error("Error al loguear:", err);
});

// evitar crashes silenciosos
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
