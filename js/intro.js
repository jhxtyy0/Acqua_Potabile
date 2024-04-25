document.addEventListener('keydown', function(event) {
    // Verifica se la freccia sinistra è stata premuta (codice 37) e l'elemento attivo non è un campo di input
    if (event.keyCode === 37 && !event.target.tagName.toLowerCase().match(/input|textarea/)) {
        // Vai alla pagina precedente
        window.location.href = 'index.html';
    }
    // Verifica se la freccia destra è stata premuta (codice 39) e l'elemento attivo non è un campo di input
    else if (event.keyCode === 39 && !event.target.tagName.toLowerCase().match(/input|textarea/)) {
        // Vai alla pagina successiva
        window.location.href = '2.html';
    }
    else if (event.keyCode === 72 && !event.target.tagName.toLowerCase().match(/input|textarea/)) {
        // Vai alla pagina successiva
        window.location.href = 'index.html';
    }
});