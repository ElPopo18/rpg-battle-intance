document.addEventListener('DOMContentLoaded', function () {
    function Enemy(name, health, weapon){
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        };
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }

    Enemy.prototype.info = function(){
        return `A ${this.name} with ${this.health}HP using a ${this.weapon}!`;
    }

    let goblin = new Enemy("Goblin", 500, "knife");
    console.log(goblin.info());

})