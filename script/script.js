document.addEventListener('DOMContentLoaded', function () {

    function Character(name, health, weapon, secWeapon){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.secWeapon = secWeapon;
    };

    function Enemy(name, health, weapon){
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        };
        Character.call(this, name, health, weapon)
    };

    function getAttackDamage (min, max) {
        const critChance = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

        if (critChance == 8) {
            return (Math.floor(Math.random() * (max - min + 1)) + min) * 2;
        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    Character.prototype.attack = function(){
        const minimumAttack = 57;
        const maximumAttack = 74
        const attackDamage = getAttackDamage(minimumAttack, maximumAttack);

        console.log(attackDamage);
    };

    Character.prototype.info = function(){
        return `A ${this.name} with ${this.health}HP using a ${this.weapon} and a ${this.secWeapon}!`;
    };

    Enemy.prototype.info = function(){
        return `A ${this.name} with ${this.health}HP using a ${this.weapon}!`;
    };

    const goblin = new Enemy("Goblin", 500, "knife");
    const gladiator = new Character("Gladiator", 700, "Iron Sword", "Iron Shield");

    const attack = document.querySelector(".attack-button");
    attack.addEventListener("click", (e) => {
        gladiator.attack();
        console.log(goblin.info());
        console.log(gladiator.info());
    })
})