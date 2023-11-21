class Warrior {
    //private data
    constructor() {
        this.health = 0;
        this.damage = 0;
    }

    //public behaviors
    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setDamage(newDamage) {
        this.damage = newDamage;
    }
    getDamage() {
        return this.damage;
    }
}

const leviathan = new Warrior();
leviathan.setDamage(10);
leviathan.setHealth(100);
console.log("leviathan's Stats:");
console.log(leviathan.getDamage());
console.log(leviathan.getHealth());

const behemoth = new Warrior();
behemoth.setDamage(15);
behemoth.setHealth(90);
console.log("behemoth's Stats:");
console.log(behemoth.getDamage());
console.log(behemoth.getHealth());

const thanos = new Warrior();
thanos.setDamage(99);
thanos.setHealth(100);
console.log("thanos's Stats:");
console.log(thanos.getDamage());
console.log(thanos.getHealth());