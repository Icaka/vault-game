import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";
import gsap from "gsap";
import PixiPlugin from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";


export default class Door extends Container {
    name = "Handle";
    private _scaleFactor: number;
    // private _sprite: Sprite;
    private _handle: Sprite;
    private _handleShadow: Sprite;
    private handleRotation = 0;
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

        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);
        this.eventMode = 'static';
        this.on('pointerdown', this.onClick);
    }

    resize(width: number, scFactor: number) {

        this._handle.width = width / scFactor;

        this._handle.scale.set(scFactor);
        // this._sprite.anchor.set(0.5);

        this.positionHandle();
    }

    positionHandle() {
        centerObjects(this);
        this.x -= this.x * (1/37);
    }

    onClick() {
        console.log("clicked handle");
        this.handleRotation += 30;
        gsap.to(this._handle, {
            pixi: {rotation: this.handleRotation },
            duration: 1,
          });
    }
}