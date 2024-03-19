class Animal {
  public name;
  constructor(n) {
    this.name = n;
  }

  bark() {
    console.log('The ' + this.name + ' is barking.');
  }

  eat(food) {
    console.log('The ' + this.name + ' is eating ' + food + '.');
  }
}

let dog = new Animal('Dog');
dog.bark();
dog.eat('bone');
