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
console.log(ime);
