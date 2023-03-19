/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version M3.1_v2
 */

/* Form Result */
(function () {

    /**
     * Vertegenwoordigt de huidige URL van de pagina.
     *
     * @type {URL}
     */
    const url = new URL(window.location);

    /**
     * Vertegenwoordigt de URL-zoekparameters.
     *
     * @type {URLSearchParams}
     */
    const params = new URLSearchParams(url.search);

    /**
     * Vertegenwoordigt de waarde van het naaminvoerveld uit het formulier.
     *
     * @type {string}
     */
    const name_form = params.get('name-form');

    /**
     * Vertegenwoordigt de waarde van het naaminvoerveld uit het formulier.
     *
     * @type {string}
     */
    const email_form = params.get('email-form');

    /**
     * Vertegenwoordigt de waarde van het invoerveld voor het afleveradres uit het formulier.
     *
     * @type {string}
     */
    const leveringsadres = params.get('leveringsadres')

    /**
     * Een object dat de formuliergegevens bevat die in de HTML-tabel moeten worden weergegeven.
     *
     * @type {Object}
     * @property {string} Naam - De naam van de indiener van het formulier.
     * @property {string} E-Mail - Het e-mailadres van de indiener van het formulier.
     * @property {string} Adres - Het afleveradres van de indiener van het formulier.
     */
    const toon_data = {
        'Naam': name_form,
        'E-Mail': email_form,
        'Address': leveringsadres,
    };

    /**
     * Vertegenwoordigt de HTML-tabel die moet worden weergegeven.
     *
     * @type {string}
     */
    let html = '<table>';

    /**
     * Itereert door het toon_data-object en maakt tabelrijen met de gegevens.
     */
    for (const [key, value] of Object.entries(toon_data)) {
        html += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
    `;
    }

    html += '</table>';

    /**
     * Voegt de HTML-tabel in het hoofdgedeelte van de pagina in.
     */
    document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].insertAdjacentHTML('beforeend', html);

})();
/* Form Result */