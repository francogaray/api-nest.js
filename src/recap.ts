const myName = 'franco';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, myAge + myName.length);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSumamary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const franco = new Persona(29, 'Franco');

console.log(franco);
