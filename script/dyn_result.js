/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 */

/* Dyn Result */
(function () {

    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);

    const product = prods[params.get('product') - 1];
    const kleur = params.get('kleur');
    const grootte = params.get('grootte');
    const option = params.get('option');

    const pro_detail_link = '/elias.dehondt/html/productdetail/';
    const pro_image_link = '/elias.dehondt/media/images/';

    const toon_data = {
        'Product': product.prod_naam,
        'Kleur': kleur,
        'Grootte': grootte,
        'Uw optie': option,
    };

    let html = '<table>';

    for (const [key, value] of Object.entries(toon_data)) {
        html += `
        <tr>
            <td>${key}</td>
            <td>${
            !value.startsWith('#') && heeft_productdetail(value) ? `<a href="${pro_detail_link}${prodNaam_naar_link_el(value)}.html" target="_blank">${value}</a>` : value
        }</td>
        </tr>
    `;
    }

    html += `
        <tr><td><br></td></tr>
        <tr><td>Product informatie</td></tr>
        <tr><td>Naam</td><td>${product.prod_naam}</td></tr>
        <tr><td>Categorie</td><td>${product.prod_categorie}</td></tr>
        <tr><td>Prijs</td><td>&euro; ${product.prod_prijs}</td></tr>
        <tr><td>Beschrijving</td><td>${product.prod_beschrijving}</td></tr>
        <tr><td>Specs</td><td>${product.prod_productspecificaties}</td></tr>
    `;

    html += '</table>';

    if (heeft_img(toon_data.Product)) {
        html += `<br><hr><br><img src="${pro_image_link}${prodNaam_naar_link_el(toon_data.Product)}.png" width="500" height="600" alt="img">`;
    }

    //document.getElementById('bestelling_data').innerHTML = html;
    document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].insertAdjacentHTML('beforeend', html);


    function heeft_productdetail(prod_naam) {
        const r = new XMLHttpRequest();
        r.open('GET', `${pro_detail_link}${prodNaam_naar_link_el(prod_naam)}.html`, false);
        r.send();
        return r.status !== 404;
    }

    function heeft_img(prod_naam) {
        const r = new XMLHttpRequest();
        r.open('GET', `${pro_image_link}${prodNaam_naar_link_el(prod_naam)}.png`, false);
        r.send();
        return r.status !== 404;
    }

    function prodNaam_naar_link_el(prod_naam) {
        return prod_naam.toLowerCase().replace(/\s/g, '');
    }
})();
/* Dyn Result */