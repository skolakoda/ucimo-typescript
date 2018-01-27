// pomocu interfejsa pravimo novi tip podataka prilagodjen nasim potrebama

interface Osoba {
    ime: string;
    prezime: string;
    zaposlen?: boolean; // ? znaci da je opciono
}

var sokrat = {
    ime: "Sokrat",
    prezime: "Atinski"
};

function pozdrav(covek: Osoba) {
    console.log("Zdravo, " + covek.ime + " " + covek.prezime);
}

pozdrav(sokrat);
