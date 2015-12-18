// interfejs pravi novi tip podatka prilagodjen nasim potrebama

interface Osoba {
    ime: string;
    prezime: string;
    zaposlen?: boolean; // ? znaci da je opciono
}

var sokrat = {
    ime: "Sokrat",
    prezime: "Atinski"
};

function pozdrav(osoba: Osoba) {
    console.log("Zdravo, " + osoba.ime + " " + osoba.prezime);
}

pozdrav(sokrat);
