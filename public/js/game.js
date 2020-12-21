import BootLoader from './BootLoader.js';
import Menu from './Menu.js';
import Level1 from './Level1.js';


var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene:[BootLoader,Menu,Level1]
};
var game = new Phaser.Game(config);


