// import config from "../config";
import Background from "../prefabs/Background";
// import ParallaxBackground from "../prefabs/ParallaxBackground";
// import { Player } from "../prefabs/Player";
import Scene from "../core/Scene";

export default class Game extends Scene {
  name = "Game";

  // private player!: Player;
  private background!: Background;

  load() {
    this.background = new Background('bg');
    // this.player = new Player();

    // this.player.x = window.innerWidth / 2;
    // this.player.y = window.innerHeight - this.player.height / 3;

    // this.background.initPlayerMovement(this.player);

    this.addChild(this.background);
  }

  async start() {
    
  }

  // onResize(width: number, height: number) {
  //   // if (this.player) {
  //   //   this.player.x = width / 2;
  //   //   this.player.y = height - this.player.height / 3;
  //   // }

  //   if (this.background) {
  //     this.background.resize(width, height);
  //   }
  // }
}
