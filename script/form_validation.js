/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version M3.1_v2
 */

/**
 * Verzamelt de informatie en steekt deze in variabelen (van personalisering.html).
 *
 * @constant {HTMLElement} naamInput - Het inputelement voor de naam.
 * @constant {HTMLElement} emailInput - Het inputelement voor het e-mailadres.
 * @constant {HTMLElement} verzendKnop - De verzendknop.
 * @constant {HTMLElement} leveringsadres - Het inputelement voor het leveringsadres.
 * @type {HTMLElement} invalid_elements - Een array van ongeldige elementen.
 */
const naamInput = document.getElementById("name-form");
const emailInput = document.getElementById("email-form");
const verzendKnop = document.getElementById("verzendknop");
const leveringsadres = document.getElementById("leveringsadres");
const invalid_elements = [];

/* Naam */
/**
 * Voegt een event listener toe aan het invoerveld "Naam".
 * Controleert of de ingevoerde waarde geldig is en toont foutmeldingen indien nodig.
 *
 * @function
 */
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
/**
 * Voegt een event listener toe aan het invoerveld "Email".
 * Controleert of de ingevoerde waarde een geldig KdG e-mailadres is en toont foutmeldingen indien nodig.
 *
 * @function
 */
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
/**
 * Event listener voor het invoerveld "leveringsadres".
 * Controleer of de waarde van het invoerveld niet leeg is en voorbij de CSS-klasse van het invoerveld aan
 * op basis van de gegevens van de informatie.
 *
 * @functie
 * @param {Event} event - Het evenement dat de functie activeert.
 * @retourneert {ongeldig}
 */
leveringsadres.addEventListener("focusout", function () {
    // Haal de waarde van het invoerveld op
    const val = leveringsadres.value.trim();
    (val.length === 0) ? setInvalid(leveringsadres, 'emailInput') : setValid(leveringsadres, 'emailInput');
});
/**
 * Stelt de involuntariness in op "valid-input", verwijdert de ongeldige klasse,
 * verwijdert de naam van het invoerveld uit de array invalid_elements en
 * roept toggleSubmitBtn aan om de status van de verzendknop bij te werken.
 *
 * @param {HTMLElement} el - Het invoerveld dat als geldig moet worden ingesteld
 * @param name
 */
function setValid(el, name) {
    el.className = "";
    el.classList.add("valid-input");
    invalid_elements.splice(invalid_elements.indexOf(name), 1);

    toggleSubmitBtn();
}
/**
 * Zet een invoerveld in de "ongeldige" toestand en voegt de naam van het veld toe aan de lijst van ongeldige velden.
 *
 * @param {HTMLElement} el - Het invoerveld dat ongeldig is.
 * @param {string} name - De naam van het invoerveld.
 */
function setInvalid(el, name) {
    el.className = "";
    el.classList.add("invalidity");
    invalid_elements.push(name);

    toggleSubmitBtn();
}
/**
 * Schakelt de status van de verzendknop in of uit op basis van de geldigheid van de formulierelementen
 * Als er ongeldige elementen zijn, wordt de verzendknop uitgeschakeld en wordt het label bijgewerkt.
 * Als er geen ongeldige elementen zijn, wordt de verzendknop ingeschakeld en wordt het label bijgewerkt.
 *
 * @functie
 * @retourneert {ongeldig}
 *
 */
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