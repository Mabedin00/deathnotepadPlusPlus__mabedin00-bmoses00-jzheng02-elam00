class MapSelectionScene extends Phaser.Scene {
    constructor() {
        super("selection");
    }

    preload() {
        this.load.image('background', 'static/images/maps/map_selection.jpg');

        this.load.image('ocean_road', 'static/images/maps/ocean_road.png');
        this.load.image('floating_island', 'static/images/maps/floating_island.png');

    }
    create () {
        this.add.image(434, 253, 'background');
        this.add.text(200, 20, 'Select a Map!', { font: '60px Arial' });


        this.place_map("ocean_road", "Ocean Road", 150, 150);
        this.place_map("floating_island", "Floating Island", 450, 150);
    }

    place_map(map_name, display_name, x, y){
        let graphics = this.add.graphics({ fillStyle: { color: 0xffffff , alpha: .9} });
        let rectangle = new Phaser.Geom.Rectangle(x - 137.2/2 - 5, y - 101.4/2 - 5, 137.2 + 10, 101.4 + 10);
        graphics.fillRectShape(rectangle);

        let map = this.add.image(x, y, map_name).setScale(.2);
        this.add.text(x - 75, y + 75, display_name, { font: '24px Arial' });

        map.setInteractive();
        map.on('pointerdown', this.select_map, {scene: this, map: map_name});
    }

    select_map() {
        this.scene.scene.start('game', {map: this.map});
    }
}