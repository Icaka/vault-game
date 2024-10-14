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
        protected closedDoor: string,
        protected openDoor: string,
        protected scFactor: number
    ) {
        super();
        this._sprite = Sprite.from(this.closedDoor);
        this._closedSprite = this._sprite;
        this._openSprite = Sprite.from(openDoor);
        this._scaleFactor = scFactor;
        this.state = false;
        // this._scaleFactor = window.innerHeight / this._sprite.height;


        this._sprite.scale.set(this._scaleFactor);
        this._openSprite.scale.set(this._scaleFactor);
        this._sprite.anchor.set(0.5);
        this._openSprite.anchor.set(0.5);


        this._openSprite.visible = false
        this.addChild(this._sprite);
        this.addChild(this._openSprite);

        centerObjects(this);
    }

    resize(width: number, scFactor: number) {
        this._sprite.width = width / scFactor;
        this._sprite.scale.set(scFactor);

        this._openSprite.width = width / scFactor;
        this._openSprite.scale.set(scFactor);
        // this._sprite.anchor.set(0.5);

        if(this._closedSprite.visible == false){
            centerObjects(this);
            this.x += this.x * (1/2);
        }
    }

    open() {
        this._closedSprite.visible = false;
        this._openSprite.visible = true;
        this.x += this.x * (1/2);
    }
}