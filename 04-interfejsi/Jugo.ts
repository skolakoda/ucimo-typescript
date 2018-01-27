interface Jugo {
    brojSedista?: number;
    maxBrzina: number;
    brzina: number;
    boja: string;
    godiste: number;
    ispravan: boolean;
    dodajGas(): void;
}

class Auto implements Jugo {
    private maxBrzina: number = 130;
    private boja: string = "Teget";
    private godiste: number = 2000;
    private ispravan: boolean = false;
    private brojVrata: number;
    private brzina: number;

    constructor(boja: string, godiste: number, ispravan: boolean) {
        this.boja = boja;
        this.godiste = godiste;
        this.ispravan = ispravan;
    }

    getBoja() {
        return this.boja;
    }

    setBrzina(x: number) {
        if (x < this.maxBrzina) 
            this.brzina = x;
    }

    public dodajGas() {
        console.log("Dodajem gas");
    }
}

const mojAuto = new Auto("Crvena", 1975, true)

console.log(mojAuto.getBoja())

mojAuto.dodajGas()