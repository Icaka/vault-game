// import config from "../config";
import Background from "../prefabs/Background";
import Door from "../prefabs/Door";
import Handle from "../prefabs/Handle";
import Scene from "../core/Scene";
import { Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";

export default class Game extends Scene {
  name = "Game";
  private background!: Background;
  private handle!: Handle;
  private door!: Door;

  load() {
    this.background = new Background('bg');
    this.door = new Door('door', 'doorClosed', this.background.scaleFactor);
    this.handle = new Handle('handle', "handleShadow", this.background.scaleFactor);
    centerObjects(this.door);

    this.addChild(this.background);
    this.addChild(this.door, this.handle);
  }

  async start() {
    
  }

  onResize(width: number, height: number) {

    if (this.background) {
      this.background.resize(width, height);
    }
    if(this.door) {
      this.door.resize(width, this.background.scaleFactor);
    }
    if(this.handle) {
      this.handle.resize(width, this.background.scaleFactor);
    }
  }
}
