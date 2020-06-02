class Bloon extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {

        super(scene, x, y, "red_bloon");
        scene.add.existing(this);
        scene.physics.world.enableBody(this, 0);
        bloons.add(this);

        this.setScale(.02);

        this.progress = 0;
        this.xlist = scene.coords.xlist;
        this.ylist = scene.coords.ylist;

        this.increment = 1 / (this.xlist.length - 1)

    }

    move() {
      if (this.progress >= 1) return;

      this.current_node = Math.floor(this.progress / this.increment)

      var distance = Phaser.Math.Distance.Between(this.xlist[this.current_node],
                                                  this.ylist[this.current_node],
                                                  this.xlist[this.current_node+1],
                                                  this.ylist[this.current_node+1]);

      this.progress += 1/distance;

      this.x = Phaser.Math.Interpolation.Linear(this.xlist, this.progress);
      this.y = Phaser.Math.Interpolation.Linear(this.ylist, this.progress);

    }
}
var mapdata = {
  'ocean_road': {
    xlist: [620, 620, 500, 500, 80, 80, 166, 171, 249, 249, 334, 334, 414, 414, 516, 516, 620, 620, 319, 319, -30],
    ylist: [0, 148, 148, 88, 88, 248, 248, 184, 184, 254, 254, 185, 185, 335, 335, 236, 236, 400, 400, 340, 340]
  }
}
class Scene0 extends Phaser.Scene {
  constructor() {
    super("selection");
  }

  create () {
    this.add.text(300, 300, 'pick a map (haha we picked for you we only have 1)');
    this.scene.start('game', {map: 'ocean_road'});
  }

}
class Scene1 extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init(data) {
    this.map = data.map;
    this.coords = mapdata[data.map];
  }

  preload () {
      this.load.image('ocean_road', 'static/images/' + this.map + '.png');
      this.load.image('red_bloon', 'static/images/Red_Bloon1.png');
  }

  create () {
    this.add.image(343, 253, 'ocean_road');
    goal = this.physics.add.sprite(-40, 340, 'ocean_road').setScale(.1);
    bloons = this.physics.add.group();

    this.physics.add.overlap(goal, bloons, this.bloon_end, null, this);
  }

  update () {
      bloons.children.iterate(function (bloon) {
        bloon.move();
      });

      tick++;
      if (tick == 60) {
        tick = 0;
        this.create_bloon();
      }
  }

  create_bloon() {
    var bloon = new Bloon(this, 620, 0);
  }

  bloon_end(goal, bloon) {
    bloon.destroy();
  }
}
var config = {
    type: Phaser.AUTO,
    width: 682,
    height: 506,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Scene0, Scene1]
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

var tick = 0;
var bloons;
var goal;

var game = new Phaser.Game(config);
