import Dog from './Dog';

test('Dog bark', () => {
  const barkingDog = new Dog('Tom');
  expect(barkingDog.bark()).toBe('Woof! My name is Tom');
});