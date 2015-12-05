/*
    - u ts fajlu pišemo izvorni kod
    - kompajliramo ga preko konzole
    - izvršavamo ga iz prevedenog js fajla

    - sav validan Javascript već radi u Typescript-u
    - plus mnoge EcmaScript6 opcije
*/
var Covek = (function () {
    function Covek() {
    }
    Covek.prototype.pozdrav = function () {
        console.log("Zdravo");
    };
    return Covek;
})();
var cika = new Covek();
cika.pozdrav();
var ime = "Daman";
