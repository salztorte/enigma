//1     EKMFLGDQVZNTOWYHXUSPAIBRCJ
//2     AJDKSIRUXBLHWTMCQGZNPYFVOE
//3     BDFHJLCPRTXVZNYEIWGAKMUSQO
//4     ESOVPZJAYQUIRHXLNFTGKACMWB
//5     VZBRGITYUPSDNHLXAWMJQOFECK
//UKW-A EJMZALYXVBWFCRQUONTSPIKHGD
//UKW-B YRUHQSLDPXNGOKMIEBFZCWVJAT
//UKW-C FVPJIAOYEDRZXWGCTKUQSBNMHL

export class Roller {
  _pattern = [];

  constructor(pattern) {
    this._pattern = pattern.toLowerCase().split("").map(it => it.charCodeAt(0) - 97);
  }

  result(key) {

    const index = key.charCodeAt(0) - 97;

    return String.fromCharCode(this._pattern[index] + 97);
  }
}


export class RollingMill  {
  _roll1;
  _roll2;
  _roll3;

  _roll1Index = 1;
  _roll2Index = 1;
  _roll3Index = 1;

  constructor(roll1, roll2, roll3) {
    this._roll1 = roll1;
    this._roll2 = roll2;
    this._roll3 = roll3;
  }
}


export const roll_1 = new Roller("EKMFLGDQVZNTOWYHXUSPAIBRCJ");
export const roll_2 = new Roller("AJDKSIRUXBLHWTMCQGZNPYFVOE");
export const roll_3 = new Roller("BDFHJLCPRTXVZNYEIWGAKMUSQO");
export const roll_4 = new Roller("ESOVPZJAYQUIRHXLNFTGKACMWB");
export const roll_5 = new Roller("VZBRGITYUPSDNHLXAWMJQOFECK");
export const ukw_a = new Roller("EJMZALYXVBWFCRQUONTSPIKHGD");
export const ukw_b = new Roller("YRUHQSLDPXNGOKMIEBFZCWVJAT");
export const ukw_c = new Roller("FVPJIAOYEDRZXWGCTKUQSBNMHL");
