/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version M3.2_v1
 */

/* Dyn Form */
/**
 * Dynamically populates the product selection list.
 *
 * @function
 * @name populateProductList
 */
const pSelect = document.getElementById('product');

prods.forEach((val) => {
    let op = document.createElement('option');
    op.setAttribute('value', val.prod_id);
    op.innerHTML = val.prod_naam;
    pSelect.append(op);
});
/* Dyn Form */