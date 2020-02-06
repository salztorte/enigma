//1     EKMFLGDQVZNTOWYHXUSPAIBRCJ
//2     AJDKSIRUXBLHWTMCQGZNPYFVOE
//3     BDFHJLCPRTXVZNYEIWGAKMUSQO
//4     ESOVPZJAYQUIRHXLNFTGKACMWB
//5     VZBRGITYUPSDNHLXAWMJQOFECK
//UKW-A EJMZALYXVBWFCRQUONTSPIKHGD
//UKW-B YRUHQSLDPXNGOKMIEBFZCWVJAT
//UKW-C FVPJIAOYEDRZXWGCTKUQSBNMHL


export class Roll {
  _pattern = [];

  constructor(pattern) {
    pattern.toLowerCase().spilt().map(it => it.charCodeAt(0) - 97);
  }

  result(index) {
    return String.fromCharCode(this._pattern[index.charCodeAt(0) - 97] + 97);
  }
}


export const roll_1 = new Roll("EKMFLGDQVZNTOWYHXUSPAIBRCJ");
export const roll_2 = new Roll("AJDKSIRUXBLHWTMCQGZNPYFVOE");
export const roll_3 = new Roll("BDFHJLCPRTXVZNYEIWGAKMUSQO");
export const roll_4 = new Roll("ESOVPZJAYQUIRHXLNFTGKACMWB");
export const roll_5 = new Roll("VZBRGITYUPSDNHLXAWMJQOFECK");
export const ukw_a = new Roll("EJMZALYXVBWFCRQUONTSPIKHGD");
export const ukw_b = new Roll("YRUHQSLDPXNGOKMIEBFZCWVJAT");
export const ukw_c = new Roll("FVPJIAOYEDRZXWGCTKUQSBNMHL");
