// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú sabes que me cuesta verte así, así", time: 51 },
  { text: "Que no pasó ni un minuto sin pensar", time: 58 },
  { text: "En ti", time: 64 },
  { text: "Tú sabes que detesto recordar que sufres como humano siendo tan angelical", time: 67 },
  { text: "Y sabes cuánto odio verte mal", time: 75 },
  { text: "Si tu risa es tan bonita", time: 81 },
  { text: "¿Para qué la vas a guardar?", time: 86 },
  { text: "Y sabes que yo solo quiero estar contigo para siempre", time: 90 },
  { text: "Pa' ayudarte a superar", time: 96 },
  { text: "No estés triste", time: 100 },
  { text: "No estés triste mi amor", time: 102 },
  { text: "Ven y vamos a otra parte a escaparnos del dolor", time: 113 },
  { text: "No estés triste", time: 117 },
  { text: "No estés triste mi amor", time: 120 },
  { text: "Que te juro que contenta", time: 123 },
  { text: "Te ves mucho mejor", time: 126 },
  { text: "Tú sabes que me encanta verte bien", time: 130 },
  { text: "Natural es tu paisaje, tan especial, sin maquillaje", time: 133 },
  { text: "Y sabes bien que puedo estar mirándote todo el día sin parar", time: 137 },
  { text: "Preciosa y más preciosa que el cielo, el Sol y el mar", time: 140 },
  { text: "Muero por preguntarte el por qué", time: 143 },
  { text: "No me miras a los ojos cuando te", time: 146 },
  { text: "Te digo te quiero", time: 150 },
  { text: "Espero poder saber que puedo hacer", time: 154 },
  { text: "Pa' curar, pa', pa', pa' alegrar inmensamente", time: 160 },
  { text: "Cada parte de tu ser", time: 161 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);