interface Covek {
    ime: string;
    prezime: string;
}

function zdravo(osoba : Covek) {
    return "Zdravo, " + osoba.ime + " " + osoba.prezime;
}

var sokrat = {ime: "Sokrat", prezime: "Atinski"};

zdravo(sokrat);
