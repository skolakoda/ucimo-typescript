interface Osoba {
    ime: string;
    prezime: string;
}

var sokrat = {
    ime: "Sokrat",
    prezime: "Atinski"
};

function zdravo(osoba: Osoba) {
    console.log("Zdravo, " + osoba.ime + " " + osoba.prezime);
}

zdravo(sokrat);
