import { Container, Point } from "pixi.js";
import { centerObjects } from "../utils/misc";
import Blink from "../prefabs/Blink";
import { getRandomInt } from "../utils/misc";


export default class BlinkContainer extends Container {
    name = "BlinkContainer";
    private _blinks!: Blink[];
    blinks_num = 30;
    blinks_range = 575;
    offsetX = -500;
    offsetY = -400;
    constructor(
        protected blink: string,
        protected scFactor: number,
    ) {
        super();

        this._blinks = [];
        for(let i = 0; i < this.blinks_num; i++){
            this._blinks.push(new Blink('blink', this.scFactor, new Point(this.offsetX + getRandomInt((-1) * this.blinks_range, this.blinks_range), 
                                                                this.offsetY + getRandomInt((-1) * (this.blinks_range - 500), this.blinks_range))));
            this.addChild(this._blinks[i]);
        }
        this.scale.set(scFactor);

        centerObjects(this);
    }

    resize(width: number, scFactor: number) {
        this.scale.set(scFactor);

        centerObjects(this);
    }

}