// ts izbacuje gresku kada prosledis drugaciji tip od propisanog
function zdravo(ime: string) {
    console.log("Zdravo moje ime je: " + ime);
}

zdravo(4);
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
