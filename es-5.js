/* Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).
2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un
numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. (15 punti)
3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent . (2.5 punti)
4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. (2.5 punti) */

const elevaNumeri = (base, esponente) => {
    if (isNaN(base) && isNaN(esponente)) {
        throw new Error(`${base} e ${esponente} non sono dei numeri`);
    } else if (isNaN(esponente)) {
        throw new Error(`${esponente} non é un numero`);
    } else if (isNaN(base)) {
        throw new Error(`${base} non é un numero`);
    }else{
        return base ** esponente;
    };
};
try {
    elevaNumeri(2, 2);
} catch (error) {
    console.error(error);
} finally {
    console.log(`l'operazione é completata`);
}
