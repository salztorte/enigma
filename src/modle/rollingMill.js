import {roll_1, roll_2, roll_3, ukw_a} from "./rolls";

export default class RollingMill {
  roll1;
  roll2;
  roll3;

  constructor(roll1 = roll_1, roll2 = roll_2, roll3 = roll_3, ukw = ukw_a) {
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.roll3 = roll3;
    this.ukw = ukw
  }

  pressKey(key) {
    if(this.roll1.rotate()) {
      if(this.roll2.rotate()) {
        this.roll2.rotate();
        this.roll3.rotate();
      }
    }

    const forward1 = this.roll1.result(key);
    const forward2 = this.roll2.result(forward1);
    const forward3 = this.roll3.result(forward2);
    const ukw = this.ukw.result(forward3);
    const reverse1 = this.roll3.resultRevers(ukw);
    const reverse2 = this.roll2.resultRevers(reverse1);
    const reverse3 = this.roll1.resultRevers(reverse2);

    return reverse3;
  }
}
