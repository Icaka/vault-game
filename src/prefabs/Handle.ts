import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Door extends Container {
    name = "Handle";
    private _scaleFactor: number;
    // private _sprite: Sprite;
    private _handle: Sprite;
    private _handleShadow: Sprite;
    constructor(
        protected handl: string,
        protected shadow: string,
        protected scFactor: number
    ) {
        super();
        this._handle = Sprite.from(this.handl);
        this._handleShadow = Sprite.from(this.shadow);
        this._scaleFactor = scFactor;
        // this._scaleFactor = window.innerHeight / this._sprite.height;


        this._handle.scale.set(this._scaleFactor);
        this._handle.anchor.set(0.5);


        this.addChild(this._handle);

        this.positionHandle();
    }

    resize(width: number, scFactor: number) {
        // this._sprite.anchor.set(0);

        //this._scaleFactor = window.innerHeight / this._sprite.texture.height;

        this._handle.width = width / scFactor;

        this._handle.scale.set(scFactor);
        // this._sprite.anchor.set(0.5);

        this.positionHandle();
    }

    positionHandle() {
        centerObjects(this);
        this.x -= this.x * (1/37);
    }
}