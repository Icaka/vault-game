import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";
import gsap from "gsap";


export default class Handle extends Container {
    name = "Handle";
    private _handle: Sprite;
    private _handleShadow: Sprite;
    private handleRotation = 0;
    constructor(
        protected handle: string,
        protected shadow: string,
        protected scFactor: number
    ) {
        super();
        this._handle = Sprite.from(this.handle);
        this._handleShadow = Sprite.from(this.shadow);
        this._handle.x = -30;
        this._handleShadow.x = this._handle.x + 15;
        this._handle.y = -40;
        this._handleShadow.y = this._handle.y + 15;


        this.scale.set(scFactor);
        this._handle.anchor.set(0.5);
        this._handleShadow.anchor.set(0.5);


        this.addChild(this._handleShadow, this._handle);

        centerObjects(this);

    }

    resize(width: number, scFactor: number) {
        this.scale.set(scFactor);

        centerObjects(this);
    }

    public rotate(dir: number) {
        ;
        this.handleRotation += dir * 60;
        gsap.to(this._handle, {
            pixi: { rotation: this.handleRotation },
            duration: 1,
        });
        gsap.to(this._handleShadow, {
            pixi: { rotation: this.handleRotation },
            duration: 1,
        });
    }

    public reset() {
        gsap.to(this, {
            pixi: { rotation: 0 },
            duration: 1,
        });
    }
}