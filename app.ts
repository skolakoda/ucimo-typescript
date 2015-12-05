/*
    - u ts fajlu pišemo izvorni kod
    - kompajliramo ga preko konzole
    - izvršavamo ga iz prevedenog js fajla

    - sav validan Javascript već radi u Typescript-u
    - plus mnoge EcmaScript6 opcije
*/

class Covek {
    pozdrav() {
        console.log("Zdravo");
    }
}

var cika = new Covek();
cika.pozdrav();

var ime: string = "Daman";
