/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version A2_v1
 */

/* Prod Zoekbalk */
Object.values(document.getElementsByClassName('radio')).forEach(btn => {
    btn.addEventListener('click', function () {
        let producten = document.getElementsByClassName('productF');

        for (let i = 0; i < producten.length; i++) {
            let prodEl = producten[i];
            prodEl.style = null;
        }

        document.getElementById('zoekbalk').value = '';
    });
});

document.getElementById('zoekbalk').onkeyup = function () {
    const zoekterm = this.value;

    if (zoekterm.length === 0) {
        let producten = document.getElementsByClassName('productF');

        for (let i = 0; i < producten.length; i++) {
            let prodEl = producten[i];
            prodEl.style = null;
        }
        return;
    }

    let kleur = document.querySelector('input[name="kleur"]:checked').value;
    let maat = document.querySelector('input[name="Maat"]:checked').value;
    let geslacht = document.querySelector('input[name="Geslacht"]:checked').value;
    let merk = document.querySelector('input[name="Merk"]:checked').value;
    let producten = document.getElementsByClassName('productF');
    for (let i = 0; i < producten.length; i++) {
        const prodEl = producten[i];
        const prodElAttr = prodEl.getAttribute("data-category").split(' ');
        const prodName = prodEl.childNodes[1].children[0].firstChild.data;
        if (
            (
                kleur === 'alle1' ||
                prodElAttr.includes(kleur)
            )
            && (
                maat === 'alle2' ||
                prodElAttr.includes(maat)
            )
            && (
                geslacht === 'alle3' ||
                prodElAttr.includes(geslacht)
            )
            && (
                merk === 'alle4' ||
                prodElAttr.includes(merk)
            )
            && prodName.toLowerCase().includes(zoekterm.toLowerCase())
        ) {
            prodEl.style.display = 'block';
        } else {
            prodEl.style.display = 'none';
        }
    }
};
/* Prod Zoekbalk */