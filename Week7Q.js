class Player {
    //private data
    constructor() {
        this.health = 0;
        this.weapon = 0;
        this.armor = 0;
        this.name = 0;
    }

    //public behaviors
    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setWeapon(newWeapon) {
        this.weapon = newWeapon;
    }
    getWeapon() {
        return this.weapon;
    }
    setArmor(newArmor) {
        this.armor = newArmor;
    }
    getArmor() {
        return this.armor;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;

}
}

const link = new Player();
link.setHealth(100);
link.setWeapon(1);
link.setArmor(1);
link.setName("Link");

console.log("Health level: " + link.getHealth());
console.log("Weapon used: " + link.getWeapon());
console.log("Armor used: " + link.getArmor());
console.log("Player name: " + link.getName());