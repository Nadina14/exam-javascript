// Esercizio 5: Error Handling e Parsing

const elevaNumeri = (base, esponente) => {
    try {
        if (isNaN(base) && isNaN(esponente)) {
            throw new Error(`${base} e ${esponente} non sono dei numeri`);
        } else if (isNaN(esponente)) {
            throw new Error(`${esponente} non é un numero`);
        } else if (isNaN(base)) {
            throw new Error(`${base} non é un numero`);
        }else{
            return base ** esponente;
        };
    } catch (error) {
        console.error(error);
        return null;
    } finally {
        console.log(`l'operazione é completata`);
    }
};

elevaNumeri();