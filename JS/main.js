// // <!-- https://tu-pagina.com/?no=Aura%20Marina&in=3 -->
// // Función para obtener los parámetros de la URL
// function obtenerParametrosURL() {
//   const parametros = new URLSearchParams(window.location.search);
//   const nombre = parametros.get("no");
//   const invitados = parametros.get("in");
//   return { nombre, invitados };
// }

// // Obtener los datos de la URL
// const datos = obtenerParametrosURL();

// const nombre = datos.nombre || "Invitado";
// const invitados = datos.invitados || "0"; // Sin "+" para el número de invitados
// // Mostrar los datos en el HTML
// document.getElementById("nombre").textContent = nombre;
// document.getElementById("invitados").textContent = invitados;
// // const invitadosConSigno = datos.invitados ? `+${datos.invitados}` : '0';
// // document.getElementById('invitados').textContent = invitadosConSigno;

// const urlBase =
//   "https://docs.google.com/forms/d/e/1FAIpQLSclMQcdg4bDqwknb6VsrLAWiijoI8rSzAEvLaQgJPs7AP1hmQ/formResponse";
// const urlParams = new URLSearchParams({
//   usp: "pp_url",
//   "entry.18154426": nombre,
//   "entry.1373878156": invitados,
// });

// const urlFinal = `${urlBase}?${urlParams.toString()}`;

// // Manejar el clic del botón para redirigir
// document
//   .getElementById("redirectButton")
//   .addEventListener("click", function () {
//     //   window.location.href = urlFinal;
//     window.open(urlFinal, "_blank"); // Abrir en una nueva ventana o pestaña
//   });

let fecha_final = new Date("10/26/2024 17:00:00");
let msFecha_final = fecha_final.getTime();
let msDia = 1000*60*60*24
let msHora = 1000*60*60;
let msMin = 1000*60;
let msSeg = 1000;

let p_dias = document.querySelector("#dias");
let p_horas = document.querySelector("#horas");
let p_minutos = document.querySelector("#minutos");
let p_segundos = document.querySelector("#segundos");
let fecha = document.querySelector("#fecha");

fecha.innerText = fecha_final.toLocaleDateString('es-GT', {
  year: 'numeric',
  month: 'numeric',  // También puedes usar 'short' o 'numeric'
  day: '2-digit'
});
setInterval(() => {
  let fecha_inicial =new Date().getTime();
  let diferencia = msFecha_final-fecha_inicial
  let dias = Math.floor(diferencia/msDia);
  let horas = Math.floor((diferencia%msDia)/msHora)
  let minutos = Math.floor((diferencia%msHora)/msMin)
  let segundos = Math.floor((diferencia%msMin)/msSeg)

  // console.log(dias,horas,minutos,segundos)
  if (diferencia>0) {
    p_dias.innerText=dias;
    p_horas.innerText=horas;
    p_minutos.innerText=minutos;
    p_segundos.innerText=segundos;  
  } else {
    p_dias.innerText=0;
    p_horas.innerText=0;
    p_minutos.innerText=0;
    p_segundos.innerText=0;  
  }
  
}, 1000);