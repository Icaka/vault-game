import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Door extends Container {
    name = "Door";
    private _closedSprite: Sprite;
    private _openContainer: Container;
    constructor(
        closedDoor: string,
        openDoor: string,
        doorShadow: string,
        scFactor: number
    ) {
        super();
        this._closedSprite = Sprite.from(closedDoor);
        this._closedSprite.x = 50;
        this._closedSprite.y = -40;
        this._closedSprite.anchor.set(0.5);

        this._openContainer = new Container();
        this._openContainer.x = 1470;
        this._openContainer.y = -40;

        this.scale.set(scFactor);
        var openDoorSprite = Sprite.from(openDoor);
        var doorShadowSprite = Sprite.from(doorShadow);
        doorShadowSprite.x = 80;
        doorShadowSprite.y = 40;
        doorShadowSprite.anchor.set(0.5);
        openDoorSprite.anchor.set(0.5);
        this._openContainer.addChild(doorShadowSprite, openDoorSprite);


        this._openContainer.visible = false
        this.addChild(this._closedSprite);
        this.addChild(this._openContainer);

        centerObjects(this);
    }

    resize(width: number, scFactor: number) {
        this.scale.set(scFactor);
        centerObjects(this);
    }

    open() {
        this._closedSprite.visible = false;
        this._openContainer.visible = true;
    }
}