interface Osoba {
    ime: string;
    prezime: string;
}

function zdravo(osoba : Osoba) {
    console.log("Zdravo, " + osoba.ime + " " + osoba.prezime);
}

var sokrat = {ime: "Sokrat", prezime: "Atinski"};

zdravo(sokrat);
