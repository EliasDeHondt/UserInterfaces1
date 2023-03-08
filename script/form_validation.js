/*
 * Van Elias De Hondt
 * https://eliasdh.com
 */

// Selecteer de invoervelden en verzendknop
const naamInput = document.getElementById("naam");
const emailInput = document.getElementById("email");
const verzendKnop = document.getElementById("verzendknop");

// Voeg eventlistener toe aan invoerveld "Naam"
naamInput.addEventListener("blur", () => {
    const naamWaarde = naamInput.value.trim();
    if (naamWaarde === "") {
        // toon foutboodschap als naam invoerveld leeg is
        document.getElementById("naamfout").textContent = "Gelieve uw naam in te vullen.";
        naamInput.classList.remove("validinput");

    } else if (/\s/.test(naamWaarde[0]) || /\s/.test(naamWaarde[naamWaarde.length - 1])) {
        // toon foutboodschap als naam invoerveld spaties vooraan of achteraan bevat
        document.getElementById("naamfout").textContent = "Naam mag geen spaties vooraan of achteraan bevatten.";
        naamInput.classList.remove("validinput");

    } else {
        // verwijder eventuele foutboodschappen en voeg CSS-klasse "validinput" toe
        document.getElementById("naamfout").textContent = "";
        naamInput.classList.add("validinput");
    }
});

// voeg een eventlistener toe aan het invoerveld "E-mailadres"
emailInput.addEventListener("input", function () {
    // haal de waarde van het invoerveld op
    const email = emailInput.value;

    // controleer of het e-mailadres een geldig kdg-e-mailadres is
    const kdgEmailRegex = /^[a-z]+\.?[a-z]+@(kdg\.be|student\.kdg\.be)$/;
    if (!kdgEmailRegex.test(email)) {
        // voeg een foutboodschap toe aan het span-element met id "email-fout"
        document.getElementById("email-fout").textContent =
            "Voer een geldig KdG e-mailadres in (voornaam.achternaam@kdg.be of voornaam.achternaam@student.kdg.be).";
        // verwijder CSS-klasse "validinput" van invoerveld
        emailInput.classList.remove("validinput");
    } else {
        // verwijder foutboodschap van span-element met id "email-fout"
        document.getElementById("email-fout").textContent = "";
        // voeg CSS-klasse "validinput" toe aan invoerveld
        emailInput.classList.add("validinput");
    }
});

// voeg een eventlistener toe aan de verzendknop
verzendKnop.addEventListener("click", function (event) {
    // haal de waarden van de invoervelden op
    const naam = naamInput.value.trim();
    const email = emailInput.value;

    // controleer of alle validatievoorwaarden zijn voldaan
    const validatievoorwaardenVoldaan =
        naam === naamInput.value &&
        /^[a-z]+\.?[a-z]+@(kdg\.be|student.kdg\.be)$/.test(email);

    // als de validatievoorwaarden niet zijn voldaan, voorkom het standaardgedrag van de verzendknop
    if (!validatievoorwaardenVoldaan) {
        event.preventDefault();
    }
});