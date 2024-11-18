AOS.init();





// ---------------------- temporizador -------------------------
function updateTimer() {
    const targetDate = new Date("september 5, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);


  var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    }
});


// -------------- consulta -----------------

// Seleccionar el formulario
const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario tradicional

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Formatear el mensaje para WhatsApp
    const phone = "541136086645"; // Número de WhatsApp al que enviar el mensaje
    const whatsappMessage = `Hola, soy ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;

    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;

    // Redirigir al enlace
    window.open(whatsappURL, "_blank");
});
