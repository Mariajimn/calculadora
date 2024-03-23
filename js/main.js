document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos relevantes
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const lightModeStylesheet = document.getElementById('light-mode-style');
    const darkModeStylesheet = document.getElementById('dark-mode-style');
    const htmlElement = document.documentElement; // También puedes usar document.body

    // Agregar un controlador de eventos al botón de cambio de modo
    darkModeToggle.addEventListener('change', function() {
        // Verificar si el modo oscuro está activado o desactivado
        if (darkModeToggle.checked) {
            // Si está activado, cambiar a modo oscuro
            htmlElement.classList.add('dark-mode');
            lightModeStylesheet.disabled = true; // Deshabilitar la hoja de estilo del modo claro
            darkModeStylesheet.disabled = false; // Habilitar la hoja de estilo del modo oscuro
        } else {
            // Si está desactivado, cambiar a modo claro
            htmlElement.classList.remove('dark-mode');
            lightModeStylesheet.disabled = false; // Habilitar la hoja de estilo del modo claro
            darkModeStylesheet.disabled = true; // Deshabilitar la hoja de estilo del modo oscuro
        }
    });
});