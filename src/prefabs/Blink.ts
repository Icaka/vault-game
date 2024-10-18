import { Container, Point, Sprite } from "pixi.js";
import { centerObjects, getRandomInt} from "../utils/misc";
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

        this._blink.anchor.set(0.5);

        this.addChild(this._blink);
        gsap.to(this, {
            pixi: {alpha: 0.6,},
            duration: 1,
            repeat: -1,
            ease: "back.inOut",
          });
        centerObjects(this);

    }

    resize(width: number, scFactor: number) {
        this.scale.set(scFactor);

        centerObjects(this);
    }

    // randSize() {
    //     if(Math.random() < 0.5) {
    //         console.log('resize');
    //         let resizor = getRandomInt(1, 20);
    //         this.width += resizor;
    //         this.height += resizor;
    //     }
    // }
}