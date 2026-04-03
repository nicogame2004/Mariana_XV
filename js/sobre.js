function initSobre() {
  const envelope = document.getElementById("openEnvelope");

  if (!envelope) return;

  envelope.addEventListener("click", () => {
    console.log("Aquí luego abrimos la invitación");
    
    // Más adelante esto puede cargar invitacion.html:
    // loadPage("./pages/invitacion.html");
  });
}