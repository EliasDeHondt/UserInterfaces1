/*
 * Van Elias De Hondt
 * https://eliasdh.com
 */


const url = new URL(window.location);
const params = new URLSearchParams(url.search);

/*
const name_form = params.get('name-form');
const email_form = params.get('email-form');
const leveringsadres = params.get('leveringsadres');
const product = params.get('product');
const kleur = params.get('kleur');
const grootte = params.get('grootte');
const option = params.get('option');
*/

let html = '<table>';

for (const [key, value] of params.entries()) {
    html += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
    `;
}

html += '</table>';

document.getElementById('bestelling_data').innerHTML = html;