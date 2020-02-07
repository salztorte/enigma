import {intToChar} from '@/util';
import {roll_1, roll_2, roll_3, Roller, Stator, ukw_a} from './rolls';

export default class RollingMill {


  constructor(private roll1: Roller = roll_1,
    private roll2: Roller = roll_2,
    private roll3: Roller = roll_3,
    private ukw: Stator = ukw_a) {
  }

  pressKey(key) {
    if (this.roll1.rotate()) {
      if (this.roll2.rotate()) {
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


  get displayedLetters() {
    return [intToChar(this.roll3.index), intToChar(this.roll2.index), intToChar(this.roll1.index)]
  }
}
