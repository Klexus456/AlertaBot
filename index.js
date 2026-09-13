const http = require("http");

const PORT = process.env.PORT || 3000;

const {registrarWish,obtenerRanking} = require("./wishes");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot activo");
}).listen(PORT, () => {
  console.log("Servidor web activo en puerto", PORT);
});

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const CHANNEL_ID = "1497001559673016563";
const ROLE_ID = "1407510732626460702";
const REQUIEM_CHANNEL_ID = "1407503772564983862";
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
  "Caleb susurra: “borren mudae”",
  "Se viene la vigesima llave de kurapika"
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

// Mensajes requiem
const mensajesRequiem = [
  "BITESTHEDUST REQUIEM YA ESTÁ LISTO",
  "15 días esperando este momento",
  "KILLER QUEEN DAISAN NO BAKUDAN",
  "Hay que pagar el aguinaldo"
];

///////////////
///////////////
///////////////
///////////////
///////////////
///////////////

// GIFs normales
const gifs = [
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/youshouldrollnow.png",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-meme.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-bot%20(1).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae%20(1).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-kakera.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-dk.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-claim.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-vinland-saga.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-hg.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-bot-micronesia.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-roll.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/rena-ryuugu-higurashi.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-negotiations-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-bot.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-rolls%20(1).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-pokemon.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-superman.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/you-have-0-rolls-left-next-rolls-reset-in-6-min-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudaebot.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/frieren-sousou-no-frieren.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-tu-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-breaking-bad.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-discord-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/laerfu-ermesloft.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/rene-barblesnarg.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-rolls.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-anime.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/broly-mduae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-rolls.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudaetime.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/U1IzO79U.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/VttOqPmi.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/lUvm7mCW.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mzzO7X68.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/KWYlL2X2KgaCvVqJ64.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/koishi-komeiji-hata-no-kokoro.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/1dsSfphQSPM1.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/i-play.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/sonic-mudae-mudae-sonic.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-bot-jumpscare-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-rolls%20(1).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-rolls%20(2).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-mudae-h.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/calcificados-mudae-any-rollers.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/squid-games-seong-gi-hun.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Normales/mudae-nicobluess.gif"
];

// GIFs últimos rolls
const gifsUltimos = [
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-bot-god-rolls.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-mudae-discord-bot.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-sonic-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/daily-rolls.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-claim%20(1).gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/genos-opm.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/milkyguts-terrence-luvs-you.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-croix-ar-tonelico.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/avengers-assemble-mudae-rollers-assemble.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-rush.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/jojo-joseph.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/claim-rolls.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-i-have-no-mouth-and-i-must-scream.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/rolls-mudae.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/mudae-o'-clock.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/jojo-diamond-is-unbreakable.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/gojo-jjk.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/88qulA9B.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/42l5TvS8SOTu.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/zLR339nSceQqrSAjFt8O.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/rene-barblesnarg.gif",
  "https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Ultimos/fTcqxxZPXIMynPYJ45.gif"
];

// Gifs requiem
const gifsRequiem = [
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/tenor.gif",
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/jojo's-bizarre-adventure-killer-queen.gif",
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/bites-the-dust-killa-queen.gif",
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/part-4-josuke.gif",
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/jojo-killer-queen.gif",
"https://file.garden/Y_GG8x4lvlrDqOYg/Mudae%20Bot/Gifs/Requiem/endurable-mudae.gif"
];

// ================= UTILIDADES =================

const OWNER = "Klexus456";
const REPO = "AlertaBot";
const FILE = "requiem.json";
const BRANCH = "main";
const RECORDATORIOS_FILE = "recordatorios.json";

async function cargarRequiem() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`,
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }
    const data = await res.json();

    return JSON.parse(
      Buffer
        .from(data.content, "base64")
        .toString("utf8")
    );

  } catch (err) {
    console.error(
      "Error leyendo requiem:",
      err
    );

    return {
      ultimaEjecucion: null
    };
  }
}

async function guardarRequiem(fecha) 
{
  try {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`;

    const actual =
      await fetch(
        url,
        {
          headers: 
          { 
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
          }
        }
      );

    if (!actual.ok) {
      const error = await actual.text();
      throw new Error(`Error leyendo archivo: ${error}`);
    }
    
    const archivo = await actual.json();

    const contenido =
      Buffer
        .from(
          JSON.stringify({
            ultimaEjecucion: fecha
          }, null, 2)
        )
        .toString("base64");

    const respuesta = await fetch(
      url,
      {
        method: "PUT",

        headers: {
          Authorization:
            `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message:
            "Actualizar requiem",
          content:
            contenido,
          sha:
            archivo.sha,
          branch:
            BRANCH
        })
      }
    );

    if (!respuesta.ok) {
      const error = await respuesta.text();
      throw new Error(error);
    }
    
    console.log("Requiem guardado en GitHub");

  } catch (err) {
    console.error("Error guardando:", err);
  }
}

// ================= RECORDATORIOS =================

async function cargarRecordatorios() {
  try {
    const url =
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${RECORDATORIOS_FILE}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const data = await res.json();

    return JSON.parse(
      Buffer
        .from(data.content, "base64")
        .toString("utf8")
    );

  } catch (err) {
    console.error("Error leyendo recordatorios:", err);
    return [];
  }
}


async function guardarRecordatorios(recordatorios, mensajeCommit) {
  try {
    const url =
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${RECORDATORIOS_FILE}`;

    const actual = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    });

    if (!actual.ok) {
      const error = await actual.text();
      throw new Error(`Error leyendo archivo: ${error}`);
    }

    const archivo = await actual.json();

    const contenido =
      Buffer
        .from(
          JSON.stringify(recordatorios, null, 2)
        )
        .toString("base64");

    const respuesta = await fetch(url, {
      method: "PUT",

      headers: {
        Authorization:
          `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: mensajeCommit,
        content: contenido,
        sha: archivo.sha,
        branch: BRANCH
      })
    });

    if (!respuesta.ok) {
      const error = await respuesta.text();
      throw new Error(error);
    }

    console.log("Recordatorios guardados en GitHub");

  } catch (err) {
    console.error("Error guardando recordatorios:", err);
  }
}

function convertirTiempo(texto) {
  const match = texto.match(/^(\d+)(m|h)$/i);

  if (!match) {
    return null;
  }

  const cantidad = parseInt(match[1]);
  const unidad = match[2].toLowerCase();

  if (cantidad <= 0) {
    return null;
  }

  if (unidad === "m") {
    return cantidad * 60 * 1000;
  }

  if (unidad === "h") {
    return cantidad * 60 * 60 * 1000;
  }

  return null;
}

function convertirFecha(texto, ahora) {
  const match = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const dia = parseInt(match[1]);
  const mes = parseInt(match[2]);
  const año = parseInt(match[3]);

  // Usamos la hora y minuto actuales
  const fecha = new Date(
    año,
    mes - 1,
    dia,
    ahora.getHours(),
    ahora.getMinutes(),
    0,
    0
  );

  // Verificar que la fecha realmente exista
  if (
    fecha.getFullYear() !== año ||
    fecha.getMonth() !== mes - 1 ||
    fecha.getDate() !== dia
  ) {
    return null;
  }

  return fecha;
}

async function crearRecordatorio(
  channelId,
  userId,
  fecha,
  mensaje,
  gif
) {
  const recordatorios = await cargarRecordatorios();

  const nuevoRecordatorio = {
    id: Date.now().toString(),
    channelId: channelId,
    userId: userId,
    fecha: fecha.toISOString(),
    mensaje: mensaje,
    gif: gif || null,
    enviado: false
  };

  recordatorios.push(nuevoRecordatorio);

  await guardarRecordatorios(
    recordatorios,
    "Agregar recordatorio"
  );

  return nuevoRecordatorio;
}

async function ejecutarRecordatorios() {
  if (!client.isReady()) {
    return;
  }

  const recordatorios = await cargarRecordatorios();

  if (recordatorios.length === 0) {
    return;
  }

  const ahora = new Date();

  let huboCambios = false;

  for (const recordatorio of recordatorios) {

    if (recordatorio.enviado) {
      continue;
    }

    const fechaRecordatorio = new Date(recordatorio.fecha);

    if (fechaRecordatorio > ahora) {
      continue;
    }

    try {
      const channel =
        await client.channels.fetch(recordatorio.channelId);

      if (!channel) {
        console.log(
          `No se encontró el canal del recordatorio ${recordatorio.id}`
        );

        recordatorio.enviado = true;
        huboCambios = true;
        continue;
      }

      let contenido =
        `🔔 **Recordatorio**\n${recordatorio.mensaje}`;

      if (recordatorio.userId) {
        contenido += `\n<@${recordatorio.userId}>`;
      }

      if (recordatorio.gif) {
        await channel.send({
          content: contenido,
          files: [recordatorio.gif]
        });
      } else {
        await channel.send({
          content: contenido
        });
      }

      console.log(
        `Recordatorio ${recordatorio.id} enviado correctamente`
      );

      recordatorio.enviado = true;
      huboCambios = true;

    } catch (err) {
      console.error(
        `Error enviando recordatorio ${recordatorio.id}:`,
        err.message
      );
    }
  }

  if (huboCambios) {
    await guardarRecordatorios(
      recordatorios,
      "Actualizar recordatorios"
    );
  }
}

function sleep(ms) 
{
  return new Promise(r => setTimeout(r, ms));
}

function enviarConTimeout(promesa, ms) 
{
  return Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout de ${ms} ms`)), ms)
    )
  ]);
}

async function enviarConReintento(channel, mensaje, gif) {
  for (let i = 1; i <= 3; i++) {
    try {
      console.log(`Intento ${i} de envío`);
      console.log("GIF:", gif);

      // Medir descarga del GIF
      const t1 = Date.now();
      const res = await fetch(gif);
      console.log(`Descarga GIF: ${Date.now() - t1} ms`);
      const buffer = Buffer.from(await res.arrayBuffer());
      console.log(`GIF descargado (${buffer.length} bytes)`);
      
      console.log("Antes de channel.send()");

      const inicio = Date.now();
      
      await enviarConTimeout(channel.send({content: mensaje, files: [gif]}), 15000);

      console.log(`Después de channel.send() (${Date.now() - inicio} ms)`);
      
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

  await enviarConReintento(channel,`<@&${ROLE_ID}> ${mensaje}`,gif);
}

async function ejecutarAlertaRequiem() {
  if (!client.isReady())
  return;
  
  const datos = await cargarRequiem();
  
  if (!datos.ultimaEjecucion)
  return;
  
  const ahora = new Date();
  const ultima = new Date(datos.ultimaEjecucion);
  const dias =Math.floor((ahora -ultima)/86400000);
  
  if (dias !== 15)
  return;
  
  const hora = (ahora.getUTCHours()- 3 + 24) % 24;
  
  if (hora !== 21 || ahora.getMinutes() !== 0)
  return;
  
  const channel = await client.channels.fetch(REQUIEM_CHANNEL_ID);
  
  if (!channel)
  return;
  
  const mensaje = mensajesRequiem[Math.floor(Math.random()*mensajesRequiem.length)];
  const gif = gifsRequiem[Math.floor(Math.random()*gifsRequiem.length)];
  
  await enviarConReintento(channel,`<@&${ROLE_ID}> ${mensaje}`,gif);
}

// ================= SCHEDULER =================

function iniciarScheduler() {
  function loop() {
    ejecutarLogica();
    ejecutarAlertaRequiem();
    ejecutarRecordatorios();

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


// ============== DETECTOR DE MENSAJES ===============

client.on("messageCreate", async message => 
{
  const texto = message.content.toLowerCase().trim();

  // Detectar wishes (mensajes de Mudae)
  if (message.author.bot && texto.includes("deseado por"))
  {
    console.log("WISH DETECTADO");
    console.log("Contenido:", message.content);
    const ids = [...message.content.matchAll(/<@!?(\d+)>/g)].map(m => m[1]);
    console.log("IDs encontrados:", ids);
  
    for (const id of ids)
    {
      await registrarWish(id, message.createdAt.toISOString());
      console.log(`Wish registrado para ${id}`);
    }
  
    return;
  }

  // Ignorar otros bots
  if (message.author.bot)
  return;

  // Detectar "bitesthedust requiem"
  if (texto.includes("bitesthedust requiem")) 
  {
    await guardarRequiem(new Date().toISOString());
    console.log("Requiem registrado");
  }

    // ==== AYUDA DE RECORDATORIOS ====

  if (texto === "!alerta") 
  {
    const ayuda =
`📌 **Sintaxis de recordatorios**

\`!recordatorio <tiempo> <mensaje>\`
\`!recordatorio <fecha> <mensaje>\`

**Ejemplos:**

\`!recordatorio 30m Recordar tirar wishes\`
\`!recordatorio 2h Hacer algo\`
\`!recordatorio 11/12/2026 Recordar hacer algo\`

**Con GIF:**

\`!recordatorio 11/12/2026 Recordar hacer algo <https://ejemplo.com/gif.gif>\`

**Tiempos disponibles:**
\`m\` = minutos
\`h\` = horas

Las fechas usan el formato:
\`DD/MM/YYYY\`

Al utilizar una fecha, el recordatorio se enviará a la **misma hora y minuto en que fue creado**.`;

    await message.reply(ayuda);
    return;
  }


  // ==== COMANDO RECORDATORIO ====

  if (texto.startsWith("!recordatorio")) 
  {
    const partes = message.content.trim().split(/\s+/);

    if (partes.length < 3) 
    {
      return message.reply(
        "Sintaxis incorrecta. Usá `!alerta` para ver cómo funciona."
      );
    }

    const tiempoOFecha = partes[1];

    const ahora = new Date();

    let fechaRecordatorio = null;

    // Intentar interpretar como tiempo
    const tiempo = convertirTiempo(tiempoOFecha);

    if (tiempo !== null) 
    {
      fechaRecordatorio = new Date(
        ahora.getTime() + tiempo
      );
    }
    else 
    {
      // Intentar interpretar como fecha
      fechaRecordatorio =
        convertirFecha(tiempoOFecha, ahora);
    }

    if (!fechaRecordatorio) 
    {
      return message.reply(
        "Tiempo o fecha inválida. Usá `!alerta` para ver la sintaxis."
      );
    }

    if (fechaRecordatorio <= ahora) 
    {
      return message.reply(
        "El recordatorio debe ser para una fecha futura."
      );
    }

    let gif = null;
    let mensajePartes = partes.slice(2);

    // Detectar GIF al final entre < >
    const ultimoElemento = mensajePartes[ mensajePartes.length - 1 ];

    if (
      ultimoElemento.startsWith("<") &&
      ultimoElemento.endsWith(">")
    ) 
    {
      const posibleGif =
        ultimoElemento.slice(1, -1);

      if (
        posibleGif.startsWith("http://") ||
        posibleGif.startsWith("https://")
      ) 
      {
        gif = posibleGif;
        mensajePartes.pop();
      }
    }

    const mensaje = mensajePartes.join(" ").trim();

    if (!mensaje) 
    {
      return message.reply(
        "Tenés que escribir un mensaje para el recordatorio."
      );
    }

    const recordatorio =
      await crearRecordatorio(
        message.channel.id,
        message.author.id,
        fechaRecordatorio,
        mensaje,
        gif
      );

    const fechaTexto =
      fechaRecordatorio.toLocaleString("es-AR", {
        dateStyle: "short",
        timeStyle: "short"
      });

    await message.reply(
      `Recordatorio creado para **${fechaTexto}**.`
    );

    console.log(
      `Recordatorio creado: ${recordatorio.id} | ` +
      `${fechaTexto} | Canal: ${message.channel.id}`
    );

    return;
  }
  
  // ==== COMANDO WISHES ====
  if (texto === "!wishes") 
  {
    const ranking = await obtenerRanking(client);

    if (ranking.length === 0) 
    {
      return message.reply("No hay wishes registrados.");
    }

    let respuesta = "Ranking de wishes toristicos\n\n";

    ranking.forEach((u, i) => 
    {
      const fecha = new Date(u.ultimaWish).toLocaleString("es-AR");
      respuesta += `${i + 1}. ${u.nombre}\n`;
      respuesta += `Wishes: ${u.cantidad}\n`;
      respuesta += `Último wish: ${fecha}\n\n`;
    });

    await message.reply(respuesta);
  }
});

// ================= LOGIN =================
if (!process.env.GITHUB_TOKEN) {
  console.error("Falta GITHUB_TOKEN");
  process.exit(1);
}

console.log("Iniciando login...");

client.login(process.env.TOKEN).then(() => {
    console.log("Login iniciado");
  })
  .catch(err => {
    console.error("Error al loguear:", err);
  });

// evitar crashes silenciosos
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
