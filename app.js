// ts podržava ES6 klase
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
// opciono eksplicira tip promenljive
var ime = "Daman";
// ts podržava ES6 template strings
console.log("Zdravo moje ime je " + ime + ".");
