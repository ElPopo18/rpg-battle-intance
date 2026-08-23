document.addEventListener('DOMContentLoaded', function () {

    function Character(name, health, weapon, secWeapon){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.secWeapon = secWeapon;
    }

    function Enemy(name, health, weapon){
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        };
        Character.call(this, name, health, weapon)
    }

    Enemy.prototype.info = function(){
        return `A ${this.name} with ${this.health}HP using a ${this.weapon}!`;
    };

    Character.prototype.info = function(){
        return `A ${this.name} with ${this.health}HP using a ${this.weapon} and a ${this.secWeapon}!`;
    };

    Object.setPrototypeOf(Character.prototype, Enemy.prototype);

    let goblin = new Enemy("Goblin", 500, "knife");
    let gladiator = new Character("Gladiator", 700, "Iron Sword", "Iron Shield")
    console.log(goblin.info());
    console.log(gladiator.info());

})