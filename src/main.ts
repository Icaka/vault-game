import SceneManager from "./core/SceneManager";
import gsap from "gsap";
import PixiPlugin from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";

const sceneManager = new SceneManager();
gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);
await sceneManager.switchScene("Loading");
await sceneManager.switchScene("Game");
