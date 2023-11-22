// Esercizio 4: DOM e Eventi

window.addEventListener('load', () => {
    const bottone = document.getElementById('btn');
    const input = document.getElementById('input');
    const p = document.getElementById('errorMessage');
    const ul = document.getElementById('tasks');
    bottone.addEventListener('click', () => {
        if (input.value.trim() === '') { // Non era richiesto, ma ho deciso di considerare anche quando l'utente avrebbe inserito uno o piú spazi vuoti.
            p.innerHTML = `Per favore, inserisci del testo.`;
        } else {
            const li = document.createElement('li');
            li.innerHTML += input.value;
            ul.appendChild(li);
            document.body.appendChild(ul);
            input.value = ''; // Non era richiesto, ma secondo me aveva senso svuotare l'input una volta inviato il testo.
        };

    });
})