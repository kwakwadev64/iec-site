function menuburger(){
    const options = document.getElementById('options');
    const btnOpen = document.getElementById('btn-open');
    const btnClose = document.getElementById('btn-close');

    if (options.classList.contains('hidden')) {
        // Ouvrir le menu
        options.classList.remove('hidden');
        btnOpen.classList.add('hidden');
        btnClose.classList.remove('hidden');
    } else {
        // Fermer le menu
        options.classList.add('hidden');
        btnOpen.classList.remove('hidden');
        btnClose.classList.add('hidden');
    }
}

// Fermer automatiquement le menu lorsqu'on clique sur un lien (optionnel mais recommandé)
document.querySelectorAll('#options a').forEach(link => {
    link.addEventListener('click', function() {
        const options = document.getElementById('options');
        const btnOpen = document.getElementById('btn-open');
        const btnClose = document.getElementById('btn-close');
        options.classList.add('hidden');
        btnOpen.classList.remove('hidden');
        btnClose.classList.add('hidden');
    });
});

// (Optionnel) Gérer le redimensionnement : si la fenêtre repasse en mode desktop,
// on s'assure que le menu mobile est bien fermé
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) { // 768px correspond à la classe md: dans Tailwind
        const options = document.getElementById('options');
        const btnOpen = document.getElementById('btn-open');
        const btnClose = document.getElementById('btn-close');
        if (!options.classList.contains('hidden')) {
            options.classList.add('hidden');
            btnOpen.classList.remove('hidden');
            btnClose.classList.add('hidden');
        }
    }
});