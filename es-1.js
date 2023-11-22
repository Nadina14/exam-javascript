// Esercizio 1: Variabili e Stringhe 

const nomeUtente = prompt('Inserisci il tuo nome');
const annoUtente = Number(prompt('Inserisci il tuo anno di nascita'));

const salutaUtente = () => {
    if ((annoUtente % 4 == 0 && annoUtente % 100 != 0) || annoUtente % 400 == 0) {
        alert(`Ciao ${nomeUtente}, sei nato/a nel ${annoUtente}, che è un anno bisestile!`);
    }else {
        alert(`Ciao ${nomeUtente}, sei nato/a nel ${annoUtente}, che non è un anno bisestile!`);
    };
};

salutaUtente();