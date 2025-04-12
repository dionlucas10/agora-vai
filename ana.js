function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
  
  setInterval(criarCoracao, 300);
  
  const musica = document.getElementById("musica");
  const botao = document.getElementById("botaoAmor");
  
  const coresDeFundo = [
    "linear-gradient(to bottom, #ffe6f0, #ffccdd)",
    "linear-gradient(to bottom, #ccf2ff, #99e6ff)",
    "linear-gradient(to bottom, #e6ffe6, #ccffcc)",
    "linear-gradient(to bottom, rgb(2, 2, 0), #ffe066)",
    "linear-gradient(to bottom, #f9d5ec, #fcd5ce)",
    "linear-gradient(to bottom, #e0c3fc, #8ec5fc)",
  ];
  
  let indice = 0;
  
  botao.addEventListener("click", () => {
    // Troca a cor de fundo
    document.body.style.background = coresDeFundo[indice];
    indice = (indice + 1) % coresDeFundo.length;
  
    // Toca a música
    if (musica) {
      musica.play();
    }
  });

  let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

  