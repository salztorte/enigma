import PlugBoard from '@/module/PlugBoard';
import RollingMill from '@/module/RollingMill';

export default class EnigmaMachine {
  private _pressedKey: number = -1;
  public rollingMill: RollingMill = new RollingMill();
  public plugBoard: PlugBoard = new PlugBoard();

  constructor() {
    window.addEventListener('keypress', (event) => this.keypress(event) );
    window.addEventListener('keyup', (event) => this.keypress(event));
  }


  keypress(event) {
    const keyValue = event.key.toLowerCase().charCodeAt(0) - 97;
    this._pressedKey = this.rollingMill.pressKey(keyValue);
  }

  keyup() {
    this._pressedKey = -1;
  }

  get pressedKey() {
    return this._pressedKey;
  }

  get displayedLetters(): string[] {
    return this.rollingMill.displayedLetters;
  }

}
