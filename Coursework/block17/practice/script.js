class Fruit {
    color;
    name;
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    ripen(){
        this.freshness - 1;

    }
}

class ExoticFruit extends Fruit {
    country;
    constructor(name,color,country){
        super(color, name)
        this.country = country;
    }
}


const banana = new Fruit("banana", "yelllow");
banana.ripen();
const apple = new Fruit("apple", "red");
apple.ripen();


const durian = new ExoticFruit("durian", "green", "Thailand");