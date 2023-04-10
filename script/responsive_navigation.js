/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version A1_v1
 */

/* Responsive Navigation */
function nav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* Responsive Navigation */