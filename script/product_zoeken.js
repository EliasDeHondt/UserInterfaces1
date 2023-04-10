/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version A2_v2
 */

/* Product Zoeken */
{
    const zoekbalk = 'zoekbalk';
    const zoekbedrag = 'zoekbedrag';

    document.getElementById(zoekbalk).onkeyup = filterZoekterm;

    let min_prijs = prods[0].prod_prijs;
    let max_prijs = 0;

    for (let i in prods) {
        if (prods[i].prod_prijs < min_prijs) {
            min_prijs = prods[i].prod_prijs;
        }
        if (prods[i].prod_prijs > max_prijs) {
            max_prijs = prods[i].prod_prijs;
        }
    }

    let zoekbedrmin = document.getElementById('zoekbedrmin');
    zoekbedrmin.setAttribute('min', min_prijs);
    zoekbedrmin.setAttribute('max', max_prijs);
    zoekbedrmin.value = min_prijs;

    let zoekbedrmax = document.getElementById('zoekbedrmax');
    zoekbedrmax.setAttribute('min', min_prijs);
    zoekbedrmax.setAttribute('max', max_prijs);
    zoekbedrmax.value = max_prijs;

    zoekbedrmin.addEventListener('keyup', function () {
        filterBedrag(this.value);
    });

    zoekbedrmax.addEventListener('keyup', function () {
        filterBedrag(null, this.value);
    });

    function filterZoekterm() {
        for (let i in prods)
            evalProds(
                document.getElementById(i),
                zoekbalk,
                prods[i].prod_naam.toLowerCase().includes(this.value.toLowerCase())
            )
    }

    function filterBedrag(min = null, max = null) {
        let zoekbedrmin = document.getElementById('zoekbedrmin');
        let zoekbedrmax = document.getElementById('zoekbedrmax');

        if (min === null) min = zoekbedrmin.value;
        if (max === null) max = zoekbedrmax.value;

        let producten = document.getElementsByClassName('productF');
        for (let i = 0; i < producten.length; i++) {
            const prodEl = producten[i];
            const prodId = prodEl.getAttribute('id');
            evalProds(
                prodEl,
                zoekbedrag,
                prods[prodId].prod_prijs >= min && prods[prodId].prod_prijs <= max
            );
        }
    }

    function evalProds(el, cause, status_ok) {
        const cause_attr = 'filter';
        let cause_filter = JSON.parse(el.getAttribute(cause_attr)) ?? [];

        if (!status_ok && cause_filter.indexOf(cause) !== -1) {
            //huidig filter al actief en nok
        } else if (!status_ok && cause_filter.indexOf(cause) === -1) {
            //nok en niet aanwezig
            cause_filter.push(cause);
            evalProd(el, cause_filter, status_ok);
        } else {
            if (status_ok && cause_filter.indexOf(cause) !== -1) {
                cause_filter.splice(cause_filter.indexOf(cause), 1);
            }
            evalProd(el, cause_filter, status_ok);
        }

        el.setAttribute(cause_attr, JSON.stringify(cause_filter));

        function evalProd(el, cause_filter, status_ok) {
            if (cause_filter.length === 0) {
                el.style.display = null;
                return;
            }
            if (!status_ok) {
                el.style.display = 'none';
            }
        }
    }

    //sorteringen
    document.getElementById('sort_naam').addEventListener('click', () => {
        let sortRadio = document.querySelector('input[name="sort_naam"]:checked').value;
        sortCats((prodsInCat) => {
            let sort_order = new Map();
            for (const i in prodsInCat) sort_order.set(i, prodsInCat[i].naam);
            prodMap = new Map([...sort_order.entries()].sort((a, b) => { return sortRadio === 'asc' ? a[1].localeCompare(b[1]) : b[1].localeCompare(a[1]) }));
            prodsInCat = [];
            for (let [key, value] of prodMap.entries()) prodsInCat.push(key);
            return prodsInCat;
        });
    });

    document.getElementById('sort_prijs').addEventListener('click', () => {
        let sortRadio = document.querySelector('input[name="sort_prijs"]:checked').value;
        sortCats((prodsInCat) => {
            let sort_order = new Map();
            for (const i in prodsInCat) sort_order.set(i, parseFloat(prodsInCat[i].prijs));
            prodMap = new Map([...sort_order.entries()].sort((a, b) => { return sortRadio === 'asc' ? a[1] > b[1] : a[1] < b[1] }));
            prodsInCat = [];
            for (let [key, value] of prodMap.entries()) prodsInCat.push(key);
            return prodsInCat;
        });
    });

    function sortCats(fun) {
        let lists = document.querySelectorAll('#productenP > li');
        for (let cat_i = 0; cat_i < lists.length; cat_i++) {
            const catElList = lists[cat_i].querySelectorAll('li[id]');
            const prodsInCat = {};
            for (let prod_i = 0; prod_i < catElList.length; prod_i++) {
                const prod = catElList[prod_i];
                const prod_id = prod.getAttribute('id');
                prodsInCat[prod_id] = {
                    naam: prods[prod_id].prod_naam,
                    prijs: prods[prod_id].prod_prijs,
                    el: prod,
                };
            }
            let prodsInCatFilterd = fun(prodsInCat);
            lists[cat_i].innerHTML = '';
            for (const i in prodsInCatFilterd) lists[cat_i].appendChild(prodsInCat[prodsInCatFilterd[i]].el);
        }
    }
}
/* Product Zoeken */