// =====================
// Cuenta Regresiva
// =====================
const countdown = () => {
  const weddingDate = new Date("March 29, 2025 17:00:00").getTime();
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};
setInterval(countdown, 1000);

// =====================
// Música de Fondo
// =====================
const music = document.getElementById("backgroundMusic");
const button = document.getElementById("musicButton");
let isPlaying = false;

function toggleMusic() {
  if (music.paused) {
    music.play();
    document.getElementById("musicButton").innerText = "⏸️ Pausar";
  } else {
    music.pause();
    document.getElementById("musicButton").innerText = "🎵 Reproducir";
  }
  isPlaying =!isPlaying;

}
// Intentar reproducción automática
window.addEventListener('load', () => {
    music.play().then(() => {
        isPlaying = true;
        button.innerHTML = '⏸️ Pausar';
    }).catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});

// Si la música no se reproduce automáticamente, iniciar al tocar cualquier parte de la pantalla
document.body.addEventListener('click', () => {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
        button.innerHTML = '⏸️ Pausar';
    }
}, { once: true }); // Solo se ejecuta una vez
// =====================
// Confirmación de Asistencia (RSVP) vía WhatsApp
// =====================


// =====================
// Inicialización de Swiper para la Galería
// =====================
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// =====================
// Funcionalidad Lightbox
// =====================
document.querySelectorAll('.swiper-slide img, .gallery img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});
document.querySelector('.close-lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

// =====================
// Funcionalidad del Sobre de Entrada (Envelope Overlay)
// =====================
document.getElementById('envelopeOverlay').addEventListener('click', function () {
  this.style.display = 'none';
});

// =====================
// Animaciones al hacer Scroll (Intersection Observer)
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Se observan elementos que queremos animar (tarjetas, títulos de sección, etc.)
document.querySelectorAll('.content-card, .detail-card, .dress-card, .section-title').forEach(el => {
  observer.observe(el);
});



document.addEventListener("DOMContentLoaded", () => {
  const envelopeContainer = document.querySelector(".envelope-rain");

  function createEnvelope() {
      const envelope = document.createElement("div");
      envelope.classList.add("envelope");
      envelope.style.left = Math.random() * 100 + "vw";
      envelope.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 segundos

      envelopeContainer.appendChild(envelope);

      setTimeout(() => {
          envelope.remove();
      }, 5000);
  }

  setInterval(createEnvelope, 500);
});
//sobre inicial
document.addEventListener("DOMContentLoaded", function () {
const waxSeal = document.getElementById("waxSeal");
const envelopeOverlay = document.getElementById("envelopeOverlay");

if (waxSeal && envelopeOverlay) {
  waxSeal.addEventListener("click", function () {
    // Ocultar el sello con animación
    waxSeal.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    waxSeal.style.opacity = "0";
    waxSeal.style.transform = "scale(0.5)";

    // Animación del sobre al abrir
    const envelopeImg = document.querySelector(".envelope-img");
    if (envelopeImg) {
      envelopeImg.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
      envelopeImg.style.transform = "translateY(-80px) rotateX(50deg)";
      envelopeImg.style.opacity = "0";
    }

    // Desaparecer la pantalla del sobre
    setTimeout(() => {
      envelopeOverlay.style.transition = "opacity 1s ease-in-out";
      envelopeOverlay.style.opacity = "0";
      envelopeOverlay.style.pointerEvents = "none"; // Evita clics en el overlay después
    }, 1000);
  });
}
});