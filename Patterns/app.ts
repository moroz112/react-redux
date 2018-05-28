interface IngredientFactory {
    createDough();
    createSauce();
}
abstract class PizzaStore {

    abstract _createPizza(type: String);
    orderPizza(type: String) {
        const pizza = this._createPizza(type);

        pizza.prepare();
        pizza.box();
    };
}

abstract class Pizza {
    public static dough;
    public static sauce;
    abstract box()

    abstract prepare();
}
class CheesePizza extends Pizza{
    public ingFactory;

    constructor(ingredientFactory: IngredientFactory) {
        super();
        this.ingFactory = ingredientFactory;
    }
    prepare() {
        this.ingFactory.createDough();
        this.ingFactory.createSauce();
    }
    box() {
        console.log('Packed your pizza');
    }
}

class NYPizzaStore extends PizzaStore{
    protected pizza;

    _createPizza(type: String) {
        const NYIngredientsFactory = new NYIngredient();

        if(type === 'cheese') {
            this.pizza = new CheesePizza(NYIngredientsFactory);
        }
        return this.pizza;
    }
}


class NYIngredient implements IngredientFactory{
    createDough() {
        console.log('NY dough created')
    }
    createSauce() {
        console.log('NY sauce created')
    }
}
class ChicagoIngredient implements IngredientFactory{
    createDough() {
        console.log('Chicago dough created')
    }
    createSauce() {
        console.log('Chicago sauce created')
    }
}
var ny = new NYPizzaStore();