import { Container, Texture, Sprite } from "pixi.js";
import { centerObjects } from "../utils/misc";


export default class Background extends Container {
    name = "Background";
  
    constructor(
      protected config: string
    ) {
      super();
  
      this.init();
  
      centerObjects(this);
    }
  
    init() {
        const texture = Texture.from(this.config);
        const scaleFactor = window.innerHeight / texture.height;
  
        const sprite = new Sprite(
          texture,
        );
  
        sprite.scale.set(scaleFactor);
        sprite.anchor.set(0.5);

  
        this.addChild(sprite);
    }
  
  
    // resize(width: number, height: number) {
    //   for (const layer of this.sprite) {
    //     const scaleFactor = height / layer.texture.height;
  
    //     layer.width = width / scaleFactor;
    //     layer.scale.set(scaleFactor);
    //   }
  
    //   centerObjects(this);
    // }
  }