const Intern = require("../lib/Intern");

test('inherits parent constructor properties', () => {
  const intern = new Intern('Drew', 3, 'email@gmail.com');

  expect(intern.name).toBe('Drew');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getEmail()).toEqual(expect.any(String));
});

test('has school property', () => {
  const intern = new Intern('Drew', 3, 'email@gmail.com', 'BYU');

  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school).toBe('BYU');
});

test('retrieves school', () => {
  const intern = new Intern('Drew', 3, 'email@gmail.com', 'BYU');

  expect(intern.getSchool()).toEqual(expect.any(String));
  expect(intern.getSchool()).toBe('BYU');
});

test('retrieves role', () => {
  const intern = new Intern('Drew', 3, 'email@gmail.com', 'BYU');

  expect(intern.getRole()).toBe('Intern');
});