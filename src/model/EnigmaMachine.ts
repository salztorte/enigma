import PlugBoard from '@/model/PlugBoard';
import RollingMill from '@/model/RollingMill';

export default class EnigmaMachine {
    private _pressedKey: number = -1;
    public rollingMill: RollingMill = new RollingMill();
    public plugBoard: PlugBoard = new PlugBoard();

    public constructor() {
        window.addEventListener('keypress', event => this.keypress(event));
        window.addEventListener('keyup', () => this.keyup());
    }

    public keypress(event) {
        const keyValue = event.key.toLowerCase().charCodeAt(0) - 97;

        const plugBoardResult = this.plugBoard.forward(keyValue);
        const rollResult = this.rollingMill.pressKey(plugBoardResult);
        this._pressedKey = this.plugBoard.reverse(rollResult);
    }

    public keyup() {
        this._pressedKey = -1;
    }

    public get pressedKey() {
        return this._pressedKey;
    }

    public get displayedLetters(): string[] {
        return this.rollingMill.displayedLetters;
    }
}
