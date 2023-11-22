// Esercizio 2: Cicli e Condizioni

const concatenaStringhe = (arrayDiStringhe) => {
    let stringaConcatenata = '';
    for (let i = 0; i < arrayDiStringhe.length; i++) {
        let stringa = arrayDiStringhe[i];
        if (stringa.toLowerCase().startsWith('a')) {
            stringaConcatenata += stringa;
        };
        if (stringaConcatenata.length > 10) {
            stringaConcatenata = stringaConcatenata.slice(0, 10);
        };
    };
    return stringaConcatenata;
};
