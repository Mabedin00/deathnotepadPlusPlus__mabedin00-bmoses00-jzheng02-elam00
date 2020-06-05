class Dart_Monkey extends Tower {

    constructor() {

        super('dart_monkey', 750, 50);

        this.cost = 200;
        this.max_charge = 60;
        this.charge = this.max_charge;
        this.range = 150;
        this.domain = LAND;
        this.dart_type = 'dart'
    }

    fire() {
        this.targets = this.return_valid_targets();
        // if there are no valid targets, stop fire function

        if (!this.targets.length) return;
        this.target = this.return_best_target();

        if (this.charge >= this.max_charge) {
            this.charge = 0;
            this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.target.x, this.target.y) + Math.PI / 2;
            new Dart(this.x, this.y, this.range, this.target, this.dart_type);
        }
    }

    create_tower() {
        new Dart_Monkey();
    }
}