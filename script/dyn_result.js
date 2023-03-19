/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version M3.2_v1
 */

/* Dyn Result */
(function () {
    /**
     * Een object om querystring parameters uit de URL te halen.
     *
     * @type {URL}
     */
    const url = new URL(window.location);

    /**
     * Een object om querystring parameters uit de URL te halen.
     *
     * @type {URLSearchParams}
     */
    const params = new URLSearchParams(url.search);

    /**
     * De geselecteerde kleur uit de querystring.
     *
     * @type {
     * {prod_prijs: string,
     * prod_productspecificaties: string,
     * prod_beschrijving: string,
     * prod_naam: string,
     * prod_categorie: string,
     * prod_id: number}
     * |
     * {prod_prijs: string,
     * prod_productspecificaties: string,
     * prod_beschrijving: string,
     * prod_naam: string,
     * prod_categorie: string,
     * prod_id: number}
     * |
     * {prod_prijs: string,
     * prod_productspecificaties: string,
     * prod_beschrijving: string,
     * prod_naam: string,
     * prod_categorie: string,
     * prod_id: number}
     * |
     * {prod_prijs: string,
     * prod_productspecificaties: string,
     * prod_beschrijving: string,
     * prod_naam: string,
     * prod_categorie: string,
     * prod_id: number}
     * |
     * {prod_prijs: string,
     * prod_productspecificaties: string,
     * prod_beschrijving: string,
     * prod_naam: string,
     * prod_categorie: string,
     * prod_id: number}
     * }
     */
    const product = prods[params.get('product') - 1];

    /**
     * De geselecteerde kleur uit de querystring.
     *
     * @type {string}
     */
    const kleur = params.get('kleur');

    /**
     * De geselecteerde grootte uit de querystring.
     *
     * @type {string}
     */
    const grootte = params.get('grootte');

    /**
     * De geselecteerde optie uit de querystring.
     *
     * @type {string}
     */
    const option = params.get('option');

    /**
     * De link naar de productdetailpagina's.
     *
     * @type {string}
     */
    const pro_detail_link = '/elias.dehondt/html/productdetail/';

    /**
     * De link naar de productafbeeldingen.
     *
     * @type {string}
     */
    const pro_image_link = '/elias.dehondt/media/images/';

    /**
     * Een object dat de data bevat om te tonen in de tabel.
     *
     * @type {Object.<string, string>}
     */
    const toon_data = {
        'Product': product.prod_naam,
        'Kleur': kleur,
        'Grootte': grootte,
        'Uw optie': option,
    };

    let html = '<table>';

    /**
     * Bouwt de HTML-code voor de tabel met de data om te tonen.
     */
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

    /**
     * Bouwt de HTML-code voor de afbeelding van het product.
     */
    if (heeft_img(toon_data.Product)) {
        html += `<br><hr><br><img src="${pro_image_link}${prodNaam_naar_link_el(toon_data.Product)}.png" width="500" height="600" alt="img">`;
    }

    document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].insertAdjacentHTML('beforeend', html);

    /**
     * Deze functie controleert of er een productdetail pagina bestaat voor de counterproductive.
     *
     * @param {string} prod_naam - De naam van het product waarvan gecontroleerd moet worden of er een detailpagina bestaat.
     * @returns {boolean} - Een boolean die aangeeft of er wel of geen detailpagina bestaat voor het gegeven product.
     */
    function heeft_productdetail(prod_naam) {
        const r = new XMLHttpRequest();
        r.open('GET', `${pro_detail_link}${prodNaam_naar_link_el(prod_naam)}.html`, false);
        r.send();
        return r.status !== 404;
    }

    /**
     * Functie om te controleren of er voor het product een afbeelding beschikbaar is.
     *
     * @param {string} prod_naam - De naam van het product waarvoor de functie controleert of er een afbeelding beschikbaar is.
     * @returns {boolean} - Geeft terug of er voor het product een afbeelding beschikbaar is (true) of niet (false).
     */
    function heeft_img(prod_naam) {
        const r = new XMLHttpRequest();
        r.open('GET', `${pro_image_link}${prodNaam_naar_link_el(prod_naam)}.png`, false);
        r.send();
        return r.status !== 404;
    }

    /**
     * Functie om de productnaam om te zetten naar een url-vriendelijke vorm.
     *
     * @param {string} prod_naam - De naam van het product dat omgezet moet worden naar een url-vriendelijke vorm.
     * @returns {string} - De omgezette productnaam in een url-vriendelijke vorm.
     */
    function prodNaam_naar_link_el(prod_naam) {
        return prod_naam.toLowerCase().replace(/\s/g, '');
    }
})();
/* Dyn Result */