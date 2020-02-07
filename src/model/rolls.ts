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

  constructor(pattern: string) {
    this.pattern = pattern
      .toLowerCase()
      .split("")
      .map(it => this.charToInt(it));
  }

  result(key: number): number {
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

  constructor(pattern: string, transmissionPoint: string) {
    super(pattern);
    this.transmissionPoint = (this.charToInt(transmissionPoint) + 1) % 26;
  }

  rotate(): boolean {
    this.index = (this.index + 1) % 26;
    const first = this.pattern.shift();
    this.pattern.push(first!);

    return this.pattern[0] === this.transmissionPoint;
  }

  resultRevers(key: number): number {
    return this.pattern.indexOf(key);
  }

  reset() {
    this.pattern = this.startPattern;
    this.index = 0;
  }
}

export const roll_1 = new Roller("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Q");
export const roll_2 = new Roller("AJDKSIRUXBLHWTMCQGZNPYFVOE", "E");
export const roll_3 = new Roller("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V");
export const roll_4 = new Roller("ESOVPZJAYQUIRHXLNFTGKACMWB", "J");
export const roll_5 = new Roller("VZBRGITYUPSDNHLXAWMJQOFECK", "Z");
export const ukw_a = new Stator("EJMZALYXVBWFCRQUONTSPIKHGD");
export const ukw_b = new Stator("YRUHQSLDPXNGOKMIEBFZCWVJAT");
export const ukw_c = new Stator("FVPJIAOYEDRZXWGCTKUQSBNMHL");
