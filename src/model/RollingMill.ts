import { intToChar } from '@/util';
import { roll1, roll2, roll3, Roller, Stator, ukwA } from './rolls';

export default class RollingMill {
    private roll1: Roller;
    private roll2: Roller;
    private roll3: Roller;
    private ukw: Stator;

    public constructor(
        r1: Roller = roll1,
        r2: Roller = roll2,
        r3: Roller = roll3,
        ukw: Stator = ukwA
    ) {
        this.roll1 = r1;
        this.roll2 = r2;
        this.roll3 = r3;
        this.ukw = ukw;
    }

    public pressKey(key) {
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

    public get displayedLetters() {
        return [
            intToChar(this.roll3.index),
            intToChar(this.roll2.index),
            intToChar(this.roll1.index),
        ];
    }
}
