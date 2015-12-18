interface Osoba {
    ime: string;
    prezime: string;
}

var sokrat = {
    ime: "Sokrat",
    prezime: "Atinski"
};

function pozdrav(osoba: Osoba) {
    console.log("Zdravo, " + osoba.ime + " " + osoba.prezime);
}

pozdrav(sokrat);
