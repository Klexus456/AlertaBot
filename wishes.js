const OWNER = "Klexus456";
const REPO = "AlertaBot";
const FILE = "wishes.json";
const BRANCH = "main";

// ================= LEER =================

async function cargarWishes() {

  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`,
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    if (!res.ok)
      throw new Error();

    const data = await res.json();
    return JSON.parse(Buffer.from(data.content,"base64").toString("utf8"));
  } 
  catch 
  {
    return {
      usuarios: {}
    };
  }
}

// ================= GUARDAR =================

async function guardarWishes(datos) {

  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`;

  const actual =
    await fetch(
      url,
      {
        headers: {Authorization: `Bearer ${process.env.GITHUB_TOKEN}`}
      }
    );

  const archivo = await actual.json();
  const contenido = Buffer.from(JSON.stringify(datos,null,2)).toString("base64");
  await fetch(
    url,
    {
      method: "PUT",

      headers: {
        Authorization:
        `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type":
        "application/json"
      },

      body: JSON.stringify({
        message: "Actualizar wishes",
        content: contenido,
        sha: archivo.sha,
        branch: BRANCH
      })
    }
  );

}

// ================= REGISTRAR =================

async function registrarWish(usuarioId, fecha) 
{

  const datos = await cargarWishes();
  if (!datos.usuarios[usuarioId]) 
  {
    datos.usuarios[usuarioId] = {cantidad: 0, ultimaWish: null};
  }
  datos.usuarios[usuarioId].cantidad++;
  datos.usuarios[usuarioId].ultimaWish = fecha;

  await guardarWishes(datos);

}

// ================= OBTENER =================

async function obtenerRanking(client) 
{
  const datos =await cargarWishes();

  const usuarios = Object.entries(datos.usuarios);

  usuarios.sort((a, b) => b[1].cantidad - a[1].cantidad);
  const resultado = [];

  for (const [id,info] of usuarios) 
  {
    let nombre = "Usuario desconocido";

    try 
    {
      const usuario = await client.users.fetch(id);
      nombre = usuario.username;
    } 
    catch {}

    resultado.push({
      nombre,
      cantidad: info.cantidad,
      ultimaWish: info.ultimaWish
    });
  }
  return resultado;
}
module.exports = {registrarWish, obtenerRanking};
