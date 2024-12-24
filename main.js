
function creaArticolo() {

    let titolo = document.getElementById('titolo').value;
    let paragrafo = document.getElementById('paragrafo').value;

    // Crea un nuovo elemento articolo
    let articolo = document.createElement('article');

    let h2 = document.createElement('h2');
    h2.textContent = titolo;

    let p = document.createElement('p');
    p.textContent = paragrafo;

    let data = document.createElement('p');
    data.textContent = `Pubblicato il: ${new Date().toLocaleDateString()}`;

    articolo.appendChild(h2);
    articolo.appendChild(p);
    articolo.appendChild(data);

    let articoliContainer = document.getElementById('articoli');
    articoliContainer.appendChild(articolo);
}


