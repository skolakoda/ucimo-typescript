interface Person {
    ime: string;
    prezime: string;
}

function zdravo(person : Person) {
    console.log("Zdravo, " + person.ime + " " + person.prezime);
}

var sokrat = {ime: "Sokrat", prezime: "Atinski"};

zdravo(sokrat);
