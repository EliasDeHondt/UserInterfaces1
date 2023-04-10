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

for (const i in prods) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.innerHTML = prods[i].prod_naam;
    pSelect.append(op);
}
/* Dyn Form */