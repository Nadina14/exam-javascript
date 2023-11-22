// Esercizio 3: Array e Oggetti 

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.rating = 6;
book.increaseRating = function (numero){
    let nuovoRating = this.rating += numero;
    nuovoRating > 10 ? this.rating = 10 : nuovoRating;
};

delete book.year;

const chiavi = Object.keys(book);
for (let i = 0; i < chiavi.length; i++) {
    const chiave = chiavi[i];
    const valore = book[chiave];
    console.log(`${chiave}: ${valore}`);
};

