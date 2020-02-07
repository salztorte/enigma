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
  _pattern = [];

  constructor(pattern) {
    this._pattern = pattern
      .toLowerCase()
      .split("")
      .map(it => this.charToInt(it));
  }

  result(key) {
    return this._pattern[key];
  }

  charToInt(char) {
    return char.toLowerCase().charCodeAt(0) - 97;
  }
}

export class Roller extends Stator {
  transmissionPoint;
  index = 0;
  startPattern = this._pattern;

  constructor(pattern, transmissionPoint) {
    super(pattern);
    this.transmissionPoint = (this.charToInt(transmissionPoint) + 1) % 26;
  }

  rotate() {
    this.index = (this.index + 1) % 26;
    const first = this._pattern.shift();
    this._pattern.push(first);

    return this._pattern[0] === this.transmissionPoint
  }


  resultRevers(key) {
    return this._pattern.indexOf(key);
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

