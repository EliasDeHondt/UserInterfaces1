/**
 * @author Nicky
 * @see https://eliasdh.com
 * @version A2_v2_nt
 */

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
            evalProd(el, cause, cause_filter, status_ok);
        } else {
            if (status_ok && cause_filter.indexOf(cause) !== -1) {
                cause_filter.splice(cause_filter.indexOf(cause), 1);
            }
            evalProd(el, cause, cause_filter, status_ok);
            if (cause_filter.length === 0) {
                //is leeg
            } else if (cause_filter.length === 1 && cause == zoekbalk) {
                //zoekbedrag is aanwezig
                trigger_zoekbedrag = true;
            } else if (cause_filter.length === 1 && cause == zoekbedrag) {
                //zoekbalk is aanwezig
                trigger_zoekbalk = true;
            }
        }

        el.setAttribute(cause_attr, JSON.stringify(cause_filter));
        
        function evalProd(el, cause, cause_filter, status_ok) {
            if (cause_filter.length === 0) {
                el.style.display = null;
                return;
            }
            if (!status_ok) {
                el.style.display = 'none';
            }
        }
    }

}
