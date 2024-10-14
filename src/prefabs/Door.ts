import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Door extends Container {
    name = "Door";
    private _scaleFactor: number;
    private _sprite: Sprite;
    private _openSprite: Sprite;
    private _closedSprite: Sprite;
    private state: boolean;
    constructor(
        protected openDoor: string,
        protected closedDoor: string,
        protected scFactor: number
    ) {
        super();
        this._sprite = Sprite.from(this.openDoor);
        this._closedSprite = this._sprite;
        this._openSprite = Sprite.from(closedDoor);
        this._scaleFactor = scFactor;
        this.state = false;
        // this._scaleFactor = window.innerHeight / this._sprite.height;


        this._sprite.scale.set(this._scaleFactor);
        this._sprite.anchor.set(0.5);


        this.addChild(this._sprite);

        centerObjects(this);
    }

    resize(width: number, scFactor: number) {
        this._sprite.width = width / scFactor;

        this._sprite.scale.set(scFactor);
        // this._sprite.anchor.set(0.5);

        centerObjects(this);
    }
}