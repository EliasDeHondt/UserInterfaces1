/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @version M3.2_v1
 */

/* Dyn Data */
/**
 * @constant {tekenreeks}
 * @description De categorie "Padel Rackets".
 */
const Padel_Rackets = "Padel Rackets"

/**
 * @constant {tekenreeks}
 * @description De categorie "Padel Schoenen".
 */
const Padel_Schoenen = "Padel Schoenen"

/**
 * @constant {tekenreeks
 * @description De categorie "Padel Balls".
 */
const Padel_Balls = "Padel Balls"

/**
 * @constant {tekenreeks}
 * @description De categorie "Padel Tassen".
 */
const Padel_Tassen = "Padel Tassen"

/**
 * Vertegenwoordigt een product in de categorie Padel.
 *
 * @typedef {Object} Product
 * @property {nummer} prod_id - De ID van het product.
 * @property {string} prod_naam - De naam van het product.
 * @property {string} prod_categorie - De categorie van het product.
 * @property {string} prod_prijs - De prijs van het product.
 * @property {string} prod_beschrijving - De beschrijving van het product.
 * @property {string} prod_productspecificaties - De productspecificaties.
 *
 * Vertegenwoordigt een verzameling producten.
 * @typedef {Product[]} ProductCollection
 */
const prods = [
    {
        prod_id: 1,
        prod_naam: "Padel Rackets 1",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "blauw medium adidas unisex",

    },
    {
        prod_id: 2,
        prod_naam: "Padel Rackets 2",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "geel medium adidas unisex",

    },
    {
        prod_id: 3,
        prod_naam: "Padel Rackets 3",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "groen medium adidas unisex",

    },
    {
        prod_id: 4,
        prod_naam: "Padel Rackets 4",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 5,
        prod_naam: "Padel Rackets 5",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 6,
        prod_naam: "Padel Rackets 6",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "geel medium adidas unisex",

    },
    {
        prod_id: 7,
        prod_naam: "Padel Rackets 7",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 8,
        prod_naam: "Padel Rackets 8",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 9,
        prod_naam: "Padel Rackets 9",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "geel medium adidas unisex",

    },
    {
        prod_id: 10,
        prod_naam: "Padel Rackets 10",
        prod_categorie: Padel_Rackets,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "geel medium adidas unisex",

    },
    {
        prod_id: 11,
        prod_naam: "Padel Schoenen 1",
        prod_categorie: Padel_Schoenen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "blauw large asics man",

    },
    {
        prod_id: 12,
        prod_naam: "Padel Schoenen 2",
        prod_categorie: Padel_Schoenen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium asics vrouw",

    },
    {
        prod_id: 13,
        prod_naam: "Padel Schoenen 3",
        prod_categorie: Padel_Schoenen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium asics vrouw",

    },
    {
        prod_id: 14,
        prod_naam: "Padel Schoenen 4",
        prod_categorie: Padel_Schoenen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium asics vrouw",

    },
    {
        prod_id: 15,
        prod_naam: "Padel Balls 1",
        prod_categorie: Padel_Balls,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium asics unisex",

    },
    {
        prod_id: 16,
        prod_naam: "Padel Balls 2",
        prod_categorie: Padel_Balls,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium asics unisex",

    },
    {
        prod_id: 17,
        prod_naam: "Padel Tassen 1",
        prod_categorie: Padel_Tassen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 18,
        prod_naam: "Padel Tassen 2",
        prod_categorie: Padel_Tassen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
    {
        prod_id: 19,
        prod_naam: "Padel Tassen 3",
        prod_categorie: Padel_Tassen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "geel medium adidas unisex",

    },
    {
        prod_id: 20,
        prod_naam: "Padel Tassen 4",
        prod_categorie: Padel_Tassen,
        prod_prijs: "1,69",
        prod_beschrijving: "x",
        prod_productspecificaties: "zwart medium adidas unisex",

    },
];
/* Dyn Data */