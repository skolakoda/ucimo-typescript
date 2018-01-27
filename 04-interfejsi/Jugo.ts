interface Jugo {
    brojSedista?: number;
    maxBrzina: number;
    boja: string;
    godiste: number;
    ispravan: boolean;
    dodajGas(): void;
}

class Auto implements Jugo {
    maxBrzina: number = 130;
    boja: string = "Teget";
    godiste: number = 2000;
    ispravan: boolean = false;
    brojVrata: number;

    constructor(boja: string, godiste: number, ispravan: boolean) {
        this.boja = boja;
        this.godiste = godiste;
        this.ispravan = ispravan;
    }

    dodajGas() {
        console.log("Dodajem gas");
    }
}

const mojAuto = new Auto("Crvena", 1975, true)

mojAuto.dodajGas()