/*
 * Van Elias De Hondt
 * https://eliasdh.com
 */
/* Form Validation */

// Collecteert de informatie en steekt het in variabelen (van personalisering.html)
const naamInput = document.getElementById("name-form");
const emailInput = document.getElementById("email-form");
const verzendKnop = document.getElementById("verzendknop");

/* Naam */
// Voeg eventlistener toe aan invoerveld "Naam"
naamInput.addEventListener("blur", () => {
    const naamWaarde = naamInput.value.trim();
    if (naamWaarde === "") {

        // Toon foutboodschap als naam invoerveld leeg is
        document.getElementById("name-form-error").textContent = "Gelieve uw naam in te vullen.";
        // Verandert de CSS code
        naamInput.classList.remove("validinput");

    } else if (/\s/.test(naamWaarde[0]) || /\s/.test(naamWaarde[naamWaarde.length - 1])) {

        // Toon foutboodschap als naam invoerveld spaties vooraan of achteraan bevat
        document.getElementById("name-form-error").textContent = "Naam mag geen spaties vooraan of achteraan bevatten.";
        // Verandert de CSS code
        naamInput.classList.remove("validinput");

    } else {

        // Verwijder eventuele foutboodschappen en voeg CSS-klasse "validinput" toe
        document.getElementById("name-form-error").textContent = "";
        // Verandert de CSS code
        naamInput.classList.add("validinput");
    }
});
/* Naam */

/* Email */
// Voeg een eventlistener toe aan het invoerveld "E-mailadres"
emailInput.addEventListener("input", function () {
    // Haal de waarde van het invoerveld op
    const email = emailInput.value;

    // Controleer of het e-mailadres een geldig kdg-e-mailadres is
    const kdgEmailRegex = /^[a-z]+\.?[a-z]+@(kdg\.be|student\.kdg\.be)$/;
    if (!kdgEmailRegex.test(email)) {
        // Voeg een foutboodschap toe aan het span-element met id "email-fout"
        document.getElementById("email-fout").textContent =
            "Voer een geldig KdG e-mailadres in (voornaam.achternaam@kdg.be of voornaam.achternaam@student.kdg.be).";
        // Verwijder CSS-klasse "validinput" van invoerveld
        emailInput.classList.remove("validinput");
    } else {
        // Verwijder foutboodschap van span-element met id "email-fout"
        document.getElementById("email-fout").textContent = "";
        // Voeg CSS-klasse "validinput" toe aan invoerveld
        emailInput.classList.add("validinput");
    }
});
/* Email */

/* Form Validation */