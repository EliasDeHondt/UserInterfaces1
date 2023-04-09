{
    addCat(Padel_Rackets);
    addCat(Padel_Schoenen);
    addCat(Padel_Balls);
    addCat(Padel_Tassen);

    function addCat(catnaam) {
        const productenP = document.getElementById('productenP');
        const catList = document.createElement('li');
        const catInnerOl = document.createElement('ol');
        for (let i in prods) {
            if (prods[i].prod_categorie != catnaam) continue;
            const prodhref = prods[i].prod_naam.replace(/\s/g, '').toLowerCase();
            const li = document.createElement('li');
            li.setAttribute('id', i);
            li.classList.add('productF');
            li.setAttribute('data-category', prods[i].prod_productspecificaties);

            const innserSection = document.createElement('li');

            const secH = document.createElement('h3');
            secH.textContent = prods[i].prod_naam;
            innserSection.appendChild(secH);

            const secA = document.createElement('a');
            secA.setAttribute('href', `/elias.dehondt/html/productdetail/${prodhref}.html`);
            const secAinnerImg = document.createElement('img');
            secAinnerImg.setAttribute('alt', prods[i].prod_naam);
            secAinnerImg.setAttribute('src', `/elias.dehondt/media/images/${prodhref}-thumbnailfoto.png`);
            secA.appendChild(secAinnerImg);
            innserSection.appendChild(secA);

            const secNaam = document.createElement('p');
            secNaam.textContent = `Naam: ${prods[i].prod_naam}`;
            innserSection.appendChild(secNaam);

            const secPrijs = document.createElement('p');
            secPrijs.textContent = `Prijs: ${prods[i].prod_prijs.toString().replace('.', ',')}`;
            innserSection.appendChild(secPrijs);

            const secCat = document.createElement('p');
            secCat.textContent = `Groep: ${prods[i].prod_categorie}`;
            innserSection.appendChild(secCat);

            li.appendChild(innserSection);
            catInnerOl.appendChild(li);
        }
        catList.appendChild(catInnerOl);
        productenP.appendChild(catList);
    }

}