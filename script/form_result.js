/*
 * Van Elias De Hondt
 * https://eliasdh.com
 */


const url = new URL(window.location);
const params = new URLSearchParams(url.search);

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