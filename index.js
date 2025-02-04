// Función para mover el botón "No" a una posición aleatoria cuando pasen el cursor sobre él
function moveButton() {
    const noButton = document.getElementById("noButton");

    // Asegurar que el botón tenga `position: absolute` para que pueda moverse
    noButton.style.position = "absolute";

    // Obtener los límites de la pantalla para que el botón no se salga
    const maxWidth = window.innerWidth - noButton.clientWidth;
    const maxHeight = window.innerHeight - noButton.clientHeight;

    // Generar una posición aleatoria dentro de los límites
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Mover el botón a la nueva posición
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Función para redirigir al usuario a "wrizz.html" cuando haga clic en el botón "Yes"
function nextPage() {
    window.location.href = "wrizz.html";
}
