/*
 * Van Elias De Hondt
 * https://eliasdh.com
 */
/* Form Validation */

// Collecteert de informatie en steekt het in variabelen (van personalisering.html)
const naamInput = document.getElementById("name-form");
const emailInput = document.getElementById("email-form");
const verzendKnop = document.getElementById("verzendknop");
const leveringsadres = document.getElementById("leveringsadres");

var invalid_elements = [];

/* Naam */
// Voeg eventlistener toe aan invoerveld "Naam"
naamInput.addEventListener("focusout", () => {
    const naamWaarde = naamInput.value;
    if (naamWaarde === "") {

        // Toon foutboodschap als naam invoerveld leeg is
        document.getElementById("name-form-error").textContent = "Gelieve uw naam in te vullen.";

        // zet invalid
        setInvalid(naamInput, 'naamInput');

    } else if (/\s/.test(naamWaarde[0]) || /\s/.test(naamWaarde[naamWaarde.length - 1])) {

        // Toon foutboodschap als naam invoerveld spaties vooraan of achteraan bevat
        document.getElementById("name-form-error").textContent = "Naam mag geen spaties vooraan of achteraan bevatten.";

        // zet invalid
        setInvalid(naamInput, 'naamInput');

    } else {

        // Verwijder eventuele foutboodschappen en voeg CSS-klasse "validinput" toe
        document.getElementById("name-form-error").textContent = "";
        // zet valid
        setValid(naamInput, 'naamInput');
    }
});
/* Naam */
/* Email */
emailInput.addEventListener("focusout", function () {
    // Haal de waarde van het invoerveld op
    const email = emailInput.value;

    // Controleer of het e-mailadres een geldig kdg-e-mailadres is
    const kdgEmailRegex = /^[a-z]+\.?[a-z]+@(kdg\.be|student\.kdg\.be)$/;
    if (!kdgEmailRegex.test(email)) {
        // Voeg een foutboodschap toe aan het span-element met id "email-fout"
        document.getElementById("email-form-error").textContent =
            "Voer een geldig KdG e-mailadres in (voornaam.achternaam@kdg.be of voornaam.achternaam@student.kdg.be).";

        // zet invalid
        setInvalid(emailInput, 'emailInput');
    } else {
        // Verwijder foutboodschap van span-element met id "email-fout"
        document.getElementById("email-form-error").textContent = "";
        // zet valid
        setValid(emailInput, 'emailInput');
    }
});
/* Email */
leveringsadres.addEventListener("focusout", function () {
    // Haal de waarde van het invoerveld op
    const val = leveringsadres.value.trim();
    (val.length === 0) ? setInvalid(leveringsadres, 'emailInput') : setValid(leveringsadres, 'emailInput');
});

function setValid(el, name) {
    el.className = "";
    el.classList.add("validinput");
    invalid_elements.splice(invalid_elements.indexOf(name), 1);

    toggleSubmitBtn();
}

function setInvalid(el, name) {
    el.className = "";
    el.classList.add("invalidinput");
    invalid_elements.push(name);

    toggleSubmitBtn();
}

function toggleSubmitBtn() {
    if (invalid_elements.length > 0) {
        verzendKnop.setAttribute('disabled', true);
        verzendKnop.innerHTML = "Ongeldige of onvoldoende informatie";
    } else {
        verzendKnop.removeAttribute('disabled');
        verzendKnop.innerHTML = "Verzenden";
    }
}

toggleSubmitBtn();
/* Form Validation */