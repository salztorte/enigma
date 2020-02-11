import { intToChar } from '@/util';
import { Roller, Stator } from './rolls';

const defaultRoll1 = new Roller('abcdefghijklmnopqrstuvwxyz', 'z');
const defaultRoll2 = new Roller('abcdefghijklmnopqrstuvwxyz', 'z');
const defaultRoll3 = new Roller('abcdefghijklmnopqrstuvwxyz', 'z');
const defaultUKW = new Stator('abcdefghijklmnopqrstuvwxyz');

export default class RollingMill {
    private rolls: Roller[] = [];
    private stator: Stator;

    public constructor(
        rolls: Roller[] = [defaultRoll1, defaultRoll2, defaultRoll3],
        stator: Stator = defaultUKW
    ) {
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

        const forward = this.rolls.reduce((res, cur) => cur.result(res), key);
        const ukw = this.stator.result(forward);
        return this.rolls.reduceRight((res, cur) => cur.result(res), ukw);
    }

    public get displayedLetters() {
        return [...this.rolls].reverse().map(it => intToChar(it.index));
    }
}
