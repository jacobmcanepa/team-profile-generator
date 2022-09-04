const Employee = require("../lib/Employee");

test('creates Employee object', () => {
  const employee = new Employee('Jared', 1, 'email@gmail.com');

  expect(employee.name).toBe('Jared');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("retrieves employee's name", () => {
  const employee = new Employee('Jared', 1, 'email@gmail.com');

  expect(employee.getName()).toBe('Jared');
});

test("retrieves employee's id", () => {
  const employee = new Employee('Jared', 1, 'email@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("retrieves employee's email", () => {
  const employee = new Employee('Jared', 1, 'email@gmail.com');

  expect(employee.getEmail()).toBe('email@gmail.com');
});

test("retrieves role", () => {
  const employee = new Employee('Jared', 1, "email@gmail.com")

  expect(employee.getRole()).toBe('Employee');
});