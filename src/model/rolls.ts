//      ABCDEFGHIJKLMNOPQRSTUVWXYZ
//1     EKMFLGDQVZNTOWYHXUSPAIBRCJ
//2     AJDKSIRUXBLHWTMCQGZNPYFVOE
//3     BDFHJLCPRTXVZNYEIWGAKMUSQO
//4     ESOVPZJAYQUIRHXLNFTGKACMWB
//5     VZBRGITYUPSDNHLXAWMJQOFECK
//UKW-A EJMZALYXVBWFCRQUONTSPIKHGD
//UKW-B YRUHQSLDPXNGOKMIEBFZCWVJAT
//UKW-C FVPJIAOYEDRZXWGCTKUQSBNMHL

export class Stator {
    protected pattern: number[] = [];

    public constructor(pattern: string) {
        this.pattern = pattern
            .toLowerCase()
            .split('')
            .map(it => this.charToInt(it));
    }

    public result(key: number): number {
        return this.pattern[key];
    }

    protected charToInt(char: string): number {
        return char.toLowerCase().charCodeAt(0) - 97;
    }
}

export class Roller extends Stator {
    private readonly transmissionPoint: number;
    public index: number = 0;
    private startPattern: number[] = [...this.pattern];

    public constructor(pattern: string, transmissionPoint: string) {
        super(pattern);
        this.transmissionPoint = (this.charToInt(transmissionPoint) + 1) % 26;
    }

    public rotate(): boolean {
        this.index = (this.index + 1) % 26;
        const first = this.pattern.shift();
        this.pattern.push(first!);

        return this.pattern[0] === this.transmissionPoint;
    }

    public resultRevers(key: number): number {
        return this.pattern.indexOf(key);
    }

    public reset() {
        this.pattern = this.startPattern;
        this.index = 0;
    }
}

export const roll1 = new Roller('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
export const roll2 = new Roller('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E');
export const roll3 = new Roller('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
export const roll4 = new Roller('ESOVPZJAYQUIRHXLNFTGKACMWB', 'J');
export const roll5 = new Roller('VZBRGITYUPSDNHLXAWMJQOFECK', 'Z');
export const ukwA = new Stator('EJMZALYXVBWFCRQUONTSPIKHGD');
export const ukwB = new Stator('YRUHQSLDPXNGOKMIEBFZCWVJAT');
export const ukwC = new Stator('FVPJIAOYEDRZXWGCTKUQSBNMHL');
