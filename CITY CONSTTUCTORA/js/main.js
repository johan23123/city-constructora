document.addEventListener("DOMContentLoaded", () => {
    const spanAnio = document.getElementById("anio-actual");
    if (spanAnio) {
        spanAnio.textContent = new Date().getFullYear();
    }
});

// Mobile navigation toggle (single listener across pages)
document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.menu-toggle');
    if (toggle) {
        const header = toggle.closest('.header');
        if (!header) return;
        const nav = header.querySelector('.nav');
        if (!nav) return;
        nav.classList.toggle('open');
    }
});
