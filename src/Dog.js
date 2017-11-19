// @flow
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Woof! My name is ${this.name}`;
  }
}

export default Dog;
