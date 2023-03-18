/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 */

/* Form Result */
(function () {

    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);

    const name_form = params.get('name-form');
    const email_form = params.get('email-form');
    const leveringsadres = params.get('leveringsadres');

    const toon_data = {
        'Naam': name_form,
        'E-Mail': email_form,
        'Address': leveringsadres,
    };

    let html = '<table>';

    for (const [key, value] of Object.entries(toon_data)) {
        html += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
    `;
    }

    html += '</table>';

    //document.getElementById('bestelling_data').innerHTML = html;
    document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].insertAdjacentHTML('beforeend', html);

})();
/* Form Result */