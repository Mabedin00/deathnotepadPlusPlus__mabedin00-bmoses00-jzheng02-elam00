class Yellow_Bloon extends Bloon {

    constructor(progress, health, path, is_camo, is_regen, og_type) {
        if (og_type == undefined) og_type = "yellow_bloon_regen";
        if (is_camo && is_regen) super("yellow_bloon_camo", progress, path, is_camo, is_regen);
        else if (is_camo)        super("yellow_bloon_camo", progress, path, is_camo, is_regen);
        else if (is_regen)       super("yellow_bloon_regen", progress, path, is_camo, is_regen, og_type);
        else                     super("yellow_bloon",progress, path, is_camo, is_regen);

        this.speed = .4;
        this.health = 1 + health;
        this.damage = 4;
        this.value = 1;

        if (this.health <= 0) {
            this.transform();
        }
    }

    transform() {
        super.transform();
        this.pop_sound();
        this.destroy();
        let child = new Green_Bloon(this.progress, this.health, this.path, this.is_camo, this.is_regen, this.og_type);
        if (this.deep_freeze) child.freeze_frames = this.freeze_frames;
        return [child];
    }

    regenerate(){
        new Pink_Bloon(this.progress, 0, this.path, this.is_camo, this.is_regen, this.og_type);
        this.destroy();
    }

}
