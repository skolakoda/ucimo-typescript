// ts podržava ES6 klase
class Covek {
    pozdrav() {
        console.log("Zdravo");
    }
}

var cika = new Covek();
cika.pozdrav();

// opciono eksplicira tip promenljive
var ime: string = "Daman";

// ts podržava ES6 template strings
console.log(`Zdravo moje ime je ${ime}.`);
