import Background from "../prefabs/Background";
import Door from "../prefabs/Door";
import Handle from "../prefabs/Handle";
import Scene from "../core/Scene";
import { centerObjects } from "../utils/misc";
import { FederatedPointerEvent } from "@pixi/events";
import Blink from "../prefabs/Blink";
import { Point } from "pixi.js";

export default class Game extends Scene {
  name = "Game";
  private background!: Background;
  private handle!: Handle;
  private door!: Door;
  private blinkList!: Blink[];
  private pass!: number[];
  private currentTry!: number[];
  private currNum!: number;
  private currDirection: boolean | null = null;
  private startDirection!: boolean;


  load() {
    this.pass = [];
    this.currentTry = [];
    this.generatePassword();
    this.background = new Background('bg');
    this.door = new Door('door', 'doorOpen', 'doorOpenShadow', this.background.scaleFactor);
    this.handle = new Handle('handle', "handleShadow", this.background.scaleFactor);
    this.blinkList = [];
    centerObjects(this.door);

    
    this.addChild(this.background);

    this.handle.eventMode = 'static';
    this.handle.on('pointerdown', (e) => this.clickedHandle(e))

    this.blinkList.push(new Blink('blink', this.background.scaleFactor, new Point(-500, 50)));
    this.blinkList.push(new Blink('blink', this.background.scaleFactor, new Point(30, 300)));
    this.blinkList.push(new Blink('blink', this.background.scaleFactor, new Point(-100, -30)));

    for(let i = 0; i < this.blinkList.length; i++){
      this.addChild(this.blinkList[i]);
    }
    
    this.addChild(this.door, this.handle);
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

    for(let i = 0; i < this.blinkList.length; i++){
      this.blinkList[i].resize(width, this.background.scaleFactor);
    }
  }

  moveHandle(dir: boolean) {
    if(this.currDirection == null){
      this.currDirection = dir;
    }
    if(this.currDirection != dir){
      this.currDirection = dir;
      if(this.addPassNum(this.currNum)){
        return;
      }
      this.currNum = 0;
    }
    this.currNum++
    this.handle.rotate(dir? 1 : -1);
  }

  clickedHandle(e: FederatedPointerEvent) {
    this.moveHandle(e.globalX > this.handle.x);
    console.log('Current Num: ' + this.currNum);
  }

  generatePassword() {
    this.pass = [];
    for(let i = 0; i < 3; i++){
      this.pass.push((Math.floor(Math.random() * 9) + 1));
    }
    this.startDirection = Math.random() < 0.5;
    this.currNum = 0;
    let directionString = '';
    let tempDir = this.startDirection;
    for(let i = 0; i < this.pass.length; i++) {
      if(tempDir){
        directionString += `clockwise: ${this.pass[i]}, `
      }else{
        directionString += `counter-clockwise: ${this.pass[i]}, `
      }
      tempDir = !tempDir;
    }
    console.log(directionString);
    console.log(`Don't forget the final spin :)`);
  }

  addPassNum(num:number): boolean{
    console.log('adding ' + num);
    this.currentTry.push(num);

    if(this.currentTry.length == this.pass.length) {
      for(let i = 0; i < this.pass.length; i++){
        if(this.currentTry[i] != this.pass[i]){
          console.log('wrong pass');
          this.wrongPassEntered();
          return true;
        }
      }
      if(this.currDirection == this.startDirection){
        console.log('wrong dir');
        this.wrongPassEntered();
        return true;
      }
      console.log('Victory');
      this.unlockVault();
      return true;
    }
    return false;
  }

  wrongPassEntered() {
    console.log('Wrong');
    this.generatePassword();
    this.handle.reset();
    this.currDirection = null;
    this.currentTry = [];
  }

  unlockVault() {
    this.door.open();
    this.handle.visible = false;
  }
}
