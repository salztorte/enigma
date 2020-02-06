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
    this._pattern = pattern.toLowerCase().split("").map(it => this.charToInt(it));
  }

  result(key) {
    const index = this.charToInt(key);
    return (this._pattern[index] + 97).toChar();
  }


  charToInt(char) {
    return char.toLowerCase().charCodeAt(0) - 97
  }
}

export class Roller extends Stator {
  transmissionPoint;

  constructor(pattern, transmissionPoint) {
    super(pattern);
    this.transmissionPoint = (this.charToInt(transmissionPoint) + 1) % 26;
  }

}

export const roll_1 = new Roller("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Q");
export const roll_2 = new Roller("AJDKSIRUXBLHWTMCQGZNPYFVOE", "E");
export const roll_3 = new Roller("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V");
export const roll_4 = new Roller("ESOVPZJAYQUIRHXLNFTGKACMWB", "J");
export const roll_5 = new Roller("VZBRGITYUPSDNHLXAWMJQOFECK", 'Z');
export const ukw_a = new Stator("EJMZALYXVBWFCRQUONTSPIKHGD");
export const ukw_b = new Stator("YRUHQSLDPXNGOKMIEBFZCWVJAT");
export const ukw_c = new Stator("FVPJIAOYEDRZXWGCTKUQSBNMHL");


export class RollingMill {
  roll1;
  roll2;
  roll3;

  index = [0, 0, 0];

  constructor(roll1=roll_1 , roll2 = roll_2, roll3 = roll_3) {
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.roll3 = roll3;
  }

  next() {
    this.index[0] = (this.index[0]+ 1) % 26;

    console.log(this.roll1.transmissionPoint, this.index[0]);

    if (this.roll1.transmissionPoint === this.index[0]) {
      this.index[1] = (this.index[1]+ 1) % 26;
    }

    if (this.roll2.transmissionPoint === this.index[1]) {
      this.index[1] = (this.index[1]+ 1) % 26;
      this.index[2] = (this.index[2]+ 1) % 26;
    }

    this.index = [...this.index];
  }


}


