// 1-masala
class Animal {
    makeSound(): void {
      console.log("Animal sound");
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }

  const genericAnimal = new Animal();
  genericAnimal.makeSound();
  
  const myDog = new Dog();
  myDog.makeSound();





// 2-masala

abstract class Shape {
  abstract getArea(): number;
}


class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }


  getArea(): number {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea()); 
