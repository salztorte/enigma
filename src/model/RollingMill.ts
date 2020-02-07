import { intToChar } from '@/util';
import { roll1, roll2, roll3, Roller, Stator, ukwA } from './rolls';

export default class RollingMill {
    private rolls: Roller[] = [];
    private stator: Stator;

    public constructor(rolls: Roller[] = [roll1, roll2, roll3], stator: Stator = ukwA) {
        this.rolls = rolls;
        this.stator = stator;
    }

    public pressKey(key) {
        if (this.rolls[0].rotate()) {
            if (this.rolls[1].rotate()) {
                this.rolls[1].rotate();
                this.rolls[2].rotate();
            }
        }

        // TODO Besser auch über das Array um noch mehr Walzen zu zulassen
        const forward1 = this.rolls[0].result(key);
        const forward2 = this.rolls[1].result(forward1);
        const forward3 = this.rolls[2].result(forward2);
        const ukw = this.stator.result(forward3);
        const reverse1 = this.rolls[2].resultRevers(ukw);
        const reverse2 = this.rolls[1].resultRevers(reverse1);
        return this.rolls[0].resultRevers(reverse2);
    }

    public get displayedLetters() {
        return this.rolls.map(it => intToChar(it.index));
    }
}
