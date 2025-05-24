document.addEventListener('DOMContentLoaded', () => {
    // Modal Confirmación
    const rsvpButton = document.getElementById('rsvp-button');
    const modal = document.getElementById('rsvp-modal');
    const closeBtn = document.querySelector('.close');
    rsvpButton.addEventListener('click', () => modal.style.display = 'block');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === modal) modal.style.display = 'none';
    });

  // Silenciar música
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('toggle-music');
  toggleBtn.style.display = 'block';

  toggleBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    toggleBtn.textContent = audio.muted ? '🔇 Activar música' : '🔊 Silenciar música';
  });

    // Cuenta regresiva
    const weddingDate = new Date('2025-10-25T17:00:00');
    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Mapa
    document.getElementById('location-button').addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=Hacienda+Paraiso', '_blank');
    });

    // Carrusel
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    let counter = 0;
    const dotsContainer = document.getElementById('carousel-dots');
    
    // Crear puntos dinámicamente
    images.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        counter = index;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
    
    function updateCarousel() {
      const imageWidth = images[0].clientWidth;
      carousel.style.transform = `translateX(-${imageWidth * counter}px)`;
      updateDots();
    }
    
    function updateDots() {
      const allDots = document.querySelectorAll('.carousel-dot');
      allDots.forEach(dot => dot.classList.remove('active'));
      allDots[counter].classList.add('active');
    }
    
    // Carrusel automático (opcional)
    setInterval(() => {
      counter = (counter + 1) % images.length;
      updateCarousel();
    }, 5000);
    

    // Muro de mensajes
    const guestbookForm = document.getElementById('guestbook-form');
    const messagesDiv = document.getElementById('messages');
    let messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    displayMessages();

    guestbookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageText = document.getElementById('message').value;
        const guestName = document.getElementById('guest-name').value;
        const message = {
            name: guestName,
            text: messageText,
            timestamp: new Date().toLocaleString()
        };
        messages.push(message);
        localStorage.setItem('guestbookMessages', JSON.stringify(messages));
        displayMessages();
        guestbookForm.reset();
    });

    function displayMessages() {
        messagesDiv.innerHTML = '<h3>Mensajes de Invitados</h3>';
        messages.forEach((message) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `
                <p><strong>${message.name}</strong> - <small>${message.timestamp}</small></p>
                <p>${message.text}</p>
            `;
            messagesDiv.appendChild(messageElement);
        });
    }


      
});
