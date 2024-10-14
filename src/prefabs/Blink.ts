import { Container, Point, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";
import gsap from "gsap";


export default class Blink extends Container {
    name = "Blink";
    private _blink: Sprite;
    constructor(
        protected blink: string,
        protected scFactor: number,
        protected offset: Point
    ) {
        super();
        this._blink = Sprite.from(this.blink);
        
        this._blink.x = offset.x;
        this._blink.y = offset.y;

        this.scale.set(scFactor);
        this._blink.anchor.set(0.5);


        this.addChild(this._blink);
        gsap.to(this, {
            pixi: {alpha: 0.5,},
            duration: 1,
            repeat: -1,
          });
        centerObjects(this);

    }

    resize(width: number, scFactor: number) {
        this.scale.set(scFactor);

        centerObjects(this);
    }

}