class Prijatelj {

    ime : string;

    constructor(ime: string) {
        this.ime = ime;
    }

    pozdrav() {
        console.log("Zdravo, moje ime je", this.ime);
    }

}   // Prijatelj

var paja = new Prijatelj("Paja");
paja.pozdrav();
