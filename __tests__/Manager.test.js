const Manager = require("../lib/Manager");

test('inherits from parent constructor', () => {
  const manager = new Manager('Dave', 1, 'email@gmail.com');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.getName()).toEqual(expect.any(String));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getEmail()).toEqual(expect.any(String));
});

test('Manager object has officeNumber property', () => {
  const manager = new Manager('Dave', 1, 'email@gmail.com', 911);
  
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('retrieves role', () => {
  const manager = new Manager('Dave', 1, 'email@gmail.com', 911);

  expect(manager.getRole()).toBe('Manager');
});

test('retrieves office number', () => {
  const manager = new Manager('Dave', 1, 'email@gmail.com', 911);

  expect(manager.getOfficeNum()).toBe(911);
  expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});