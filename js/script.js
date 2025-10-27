// Scroll suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón para volver arriba
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "↑";
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.zIndex = "1000";
scrollTopBtn.style.background = "rgba(54, 0, 204, 0.7)";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.cursor = "pointer";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// ---- Botón de contacto ----
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContacto");
    const mensaje = document.getElementById("mensajeEnviado");
  
    if (!form) {
      console.error("No se encontró el formulario");
      return;
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      mensaje.textContent = "Gracias por contactarme. Te responderé pronto ❤️";
      mensaje.style.opacity = "1";
  
      form.reset();
  
      setTimeout(() => {
        mensaje.style.opacity = "0";
      }, 4000);
    });
  });
  // --- JS para la funcionalidad de los Modals (Ver Más) ---
  document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); 
            closeModal(modal);
        });
    });

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });


    // --- JS para el formulario de contacto ---
    const form = document.getElementById("formContacto");
    const mensaje = document.getElementById("mensajeEnviado");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            mensaje.textContent = "Gracias por contactarme. Te responderé pronto ❤️";
            mensaje.style.opacity = "1";
            
            form.reset();
            
            setTimeout(() => {
                mensaje.style.opacity = "0";
            }, 4000);
        });
    }
});

