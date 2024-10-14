import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Door extends Container {
    name = "Door";
    private _scaleFactor: number;
    private _closedSprite: Sprite;
    private _openSprite: Sprite;
    constructor(
        protected closedDoor: string,
        protected openDoor: string,
        protected scFactor: number
    ) {
        super();
        this._closedSprite = Sprite.from(this.closedDoor);
        this._closedSprite.x = 50;
        this._closedSprite.y = -40;
        this._openSprite = Sprite.from(openDoor);
        this._openSprite.x = 1470;
        this._openSprite.y = -40;
        this._scaleFactor = scFactor;

        this.scale.set(this._scaleFactor);
        this._closedSprite.anchor.set(0.5);
        this._openSprite.anchor.set(0.5);


        this._openSprite.visible = false
        this.addChild(this._closedSprite);
        this.addChild(this._openSprite);

        centerObjects(this);
    }

    resize(width: number, scFactor: number) {

        this.scale.set(scFactor);
        centerObjects(this);
    }

    open() {
        this._closedSprite.visible = false;
        this._openSprite.visible = true;
    }
}