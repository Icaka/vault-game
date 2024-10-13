// import config from "../config";
import Background from "../prefabs/Background";
// import ParallaxBackground from "../prefabs/ParallaxBackground";
// import { Player } from "../prefabs/Player";
import Scene from "../core/Scene";
import { Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";

export default class Game extends Scene {
  name = "Game";

  // private player!: Player;
  private background!: Background;
  private door!: Sprite;
  private doorOpen!: Sprite;
  private handle!: Sprite;
  

  load() {
    this.background = new Background('bg');
    this.door = Sprite.from('door');
    this.handle = Sprite.from('handle');
    centerObjects(this.door, this.handle);

    //this.door.x += this.door.x*(1/50);
    //this.door.height = 470;
    this.handle.scale.set(this.background.scaleFactor);
    this.door.scale.set(this.background.scaleFactor);
    this.doorOpen = Sprite.from('doorOpen');
    // this.player = new Player();

    // this.player.x = window.innerWidth / 2;
    // this.player.y = window.innerHeight - this.player.height / 3;

    // this.background.initPlayerMovement(this.player);

    this.addChild(this.background);
    this.addChild(this.door, this.handle);
  }

  async start() {
    
  }

  onResize(width: number, height: number) {
    // if (this.player) {
    //   this.player.x = width / 2;
    //   this.player.y = height - this.player.height / 3;
    // }

    if (this.background) {
      this.background.resize(width, height);
    }
  }
}
