console.log("Hello");
let wand = "Wand"
let sword = "Sword"
class Hero {
    constructor(heroName, health, weapon) {
        this.heroName = heroName
        this.health = health;
        this.weapon = weapon
    }

    dropWeapon() {
        try {
            if (!this.weapon) {
                throw("You have nothing to drop")
            }
            this.weapon = null
        } catch(err) {
            console.log(err);
        }
    }

    takeWeapon(weapon) {
        try {
            if (this.weapon) {
                throw("You already have a weapon")
            }
            if (this.weapon !== wand && this.weapon !== sword) {
                throw("You cant take that")
            }
            this.weapon = weapon
        } catch(err) {
            console.log(err);
        }
    }

    speak() {
        console.log("Heroes speak different languages")
    }

    static getInstance(heroName, health, weapon) {
        if (!instance) {
            instance = new Hero(heroName, health, weapon)
        }
        return instance
    }

}


class Wizard extends Hero {
    constructor(heroName, weapon) {
        super(heroName, weapon)
        if(Wizard.instance) {
            return Wizard.instance
        }
        Wizard.instance = this
        this.heroName = heroName
        this.health = 150
        this.weapon = weapon

    }

    speak() {
        console.log("I speak English")
    }

}

class Swordsman extends Hero {
    constructor(heroName, weapon) {
        super(heroName, weapon)
        if(Swordsman.instance) {
            return Swordsman.instance
        }
        Swordsman.instance = this
        this.heroName = heroName
        this.health = 100;
        this.weapon = weapon

    }

    speak() {
        console.log("Ich spreche Deutch")
    }

}


let wizard = new Wizard("Wizard", wand)
let swordsman = new Swordsman("Swordsman", sword)


