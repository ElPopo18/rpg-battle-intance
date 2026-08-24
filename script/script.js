document.addEventListener('DOMContentLoaded', function () {

    function Player(name, health, weapon, secWeapon){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.secWeapon = secWeapon;
    };

    function Enemy(name, health, weapon){
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        };
        Player.call(this, name, health, weapon)
    };

    function getAttackDamage (min, max) {
        const critChance = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

        if (critChance == 8) {
            return (Math.floor(Math.random() * (max - min + 1)) + min) * 2;
        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    function damageCalculation (attack, characterAttack){
        if (characterAttack == true){
            goblin.health -= attack;
            console.log(`${gladiator.name} did ${attack} damage to the ${goblin.name}`);
            goblin.health = goblin.health < 0 ? 0 : goblin.health;
            console.log(`Goblin's health: ${goblin.health}`);
        } else {
            gladiator.health -= attack;
            console.log(`${goblin.name} did ${attack} damage to the ${gladiator.name}`);
            gladiator.health = gladiator.health < 0 ? 0 : gladiator.health;
            console.log(`Gladiator's health: ${gladiator.health}`);
        }
    }

    Player.prototype.attack = function(){
        const minimumAttack = 57;
        const maximumAttack = 74
        let attackDamage = getAttackDamage(minimumAttack, maximumAttack);
        const playerAttack = true;

        damageCalculation(attackDamage, playerAttack)
    };

    Enemy.prototype.attack = function(){
        const minimumAttack = 50;
        const maximumAttack = 65
        let attackDamage = getAttackDamage(minimumAttack, maximumAttack);
        const playerAttack = false;

        damageCalculation(attackDamage, playerAttack)
    };

    function resetBattle() {
        goblin.health = 500;
        gladiator.health = 700;
    };

    const goblin = new Enemy("Goblin", 500, "knife");
    const gladiator = new Player("Gladiator", 700, "Iron Sword", "Iron Shield");

    const attack = document.querySelector(".attack-button");
    attack.addEventListener("click", (e) => {
        if (goblin.health <= 0 && gladiator.health > 0){
            console.log(`The ${goblin.name} is dead! ${gladiator.name} won!!`);
            resetBattle();
        } else if (gladiator.health <= 0 && goblin.health > 0) {
            console.log(`The ${gladiator.name} is dead! ${goblin.name} won...`);
            resetBattle();
        } else {
            gladiator.attack();
            goblin.attack();
        }
    })
})