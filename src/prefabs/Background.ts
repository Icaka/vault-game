import { Container, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Background extends Container {
  name = "Background";
  private _scaleFactor: number;
  private _sprite: Sprite;
  constructor(
    protected config: string
  ) {
    super();
    this._sprite = Sprite.from(this.config);
    this._scaleFactor = window.innerHeight / this._sprite.height;


    this._sprite.scale.set(this._scaleFactor);
    this._sprite.anchor.set(0.5);


    this.addChild(this._sprite);

    centerObjects(this);
  }

  public get scaleFactor() {
    return this._scaleFactor;
  }

  resize(width: number, height: number) {
      // this._sprite.anchor.set(0);
      
      this._scaleFactor = window.innerHeight / this._sprite.texture.height;

      this._sprite.width = width / this._scaleFactor;

      this._sprite.scale.set(this._scaleFactor);
      // this._sprite.anchor.set(0.5);

    centerObjects(this);
  }
}