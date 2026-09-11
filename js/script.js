const theme_button = document.querySelector("#theme_button");

theme_button.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");

    const dark_mode_active =
        document.body.classList.contains("dark_mode");

    theme_button.textContent =
        dark_mode_active
        ? "☀️ Modo claro"
        : "🌙 Modo oscuro";
});

const contact_form = document.querySelector("#contact_form");
const form_message = document.querySelector("#form_message");
contact_form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contact_form.checkValidity()) {
        form_message.textContent =
            "Por favor, completa correctamente todos los campos obligatorios.";
        form_message.setAttribute("aria-live", "assertive");
        contact_form.reportValidity();

        return;
    }

    form_message.textContent =
        "Formulario validado correctamente. ¡Gracias por contactarme!";
    form_message.setAttribute("aria-live", "polite");
    contact_form.reset();
    
});