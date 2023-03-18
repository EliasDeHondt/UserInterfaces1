/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 */

/* Dyn Form */
const pSelect = document.getElementById('product');

//De lijst wordt nu dynamisch opgevuld.
prods.forEach((val) => {
    let op = document.createElement('option');
    op.setAttribute('value', val.prod_id);
    op.innerHTML = val.prod_naam;
    pSelect.append(op);
});
/* Dyn Form */