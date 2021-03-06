class Ceramic_Bloon extends Bloon {

    constructor(progress, health, path, is_camo, is_regen, og_type) {
        if (og_type == undefined) og_type = "ceramic_bloon_regen";
        if (is_camo && is_regen) super("ceramic_bloon_camo", progress, path, is_camo, is_regen);
        else if (is_camo)        super("ceramic_bloon_camo", progress, path, is_camo, is_regen);
        else if (is_regen)       super("ceramic_bloon_regen", progress, path, is_camo, is_regen, og_type);
        else                     super("ceramic_bloon",progress, path, is_camo, is_regen);

        this.speed = .4;
        this.health = 50 + health;
        this.damage = 104;
        this.value = 1;

        if (this.health <= 0) {
            this.transform();
        }
    }

    transform() {
        super.transform();
        this.pop_sound();
        this.destroy();
        let child1 = new Rainbow_Bloon(this.progress, this.health, this.path, this.is_camo, this.is_regen, this.og_type);
        let child2 = new Rainbow_Bloon(this.progress+.001, this.health, this.path, this.is_camo, this.is_regen, this.og_type);
        if (this.deep_freeze) {
            child1.freeze_frames = this.freeze_frames;
            child2.freeze_frames = this.freeze_frames;
        }
        return [child1, child2];
    }
}
