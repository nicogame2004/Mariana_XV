const app = document.getElementById("app");

let audioPlayer = null;

function stopInvitationMusic() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer = null;
    }
}

function startInvitationMusic() {
    stopInvitationMusic();

    audioPlayer = new Audio("assets/music/cancion1.mp3");
    audioPlayer.loop = true;
    audioPlayer.volume = 0.7;

    audioPlayer.play().catch((error) => {
        console.warn("El navegador bloqueó la reproducción automática:", error);
    });
}

function loadPage(page) {
    fetch(page)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${page}`);
            }
            return response.text();
        })
        .then((html) => {
            app.innerHTML = html;

            if (page.includes("invitacion.html")) {
                startInvitationMusic();

                if (typeof initInvitacion === "function") {
                    initInvitacion();
                }
            } else {
                stopInvitationMusic();
            }
        })
        .catch((error) => {
            console.error("Error cargando página:", error);
            app.innerHTML = "<p>Error al cargar la página.</p>";
        });
}

const params = new URLSearchParams(window.location.search);
const currentPage = params.get("page");

if (currentPage === "invitacion") {
    loadPage("pages/invitacion.html");
} else {
    loadPage("pages/sobre.html");
}