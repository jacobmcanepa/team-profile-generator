const Engineer = require('../lib/Engineer');

test('inherited from parent constructor', () => {
  const engineer = new Engineer('Jeff', 2, 'email@gmail.com');

  expect(engineer.name).toBe('Jeff');
  expect(engineer.id).toEqual(2);
  expect(engineer.email).toBe('email@gmail.com');
});

test('has github property', () => {
  const engineer = new Engineer('Jeff', 2, 'email@gmail.com', 'octocat');

  expect(engineer.github).toEqual(expect.any(String));
});

test('retrives github', () => {
  const engineer = new Engineer('Jeff', 2, 'email@gmail.com', 'octocat');

  expect(engineer.getGithub()).toEqual(expect.any(String));
  expect(engineer.getGithub()).toBe('octocat');
});

test('retrieves role', () => {
  const engineer = new Engineer('Jeff', 2, 'email.@gmail.com', 'octocat');

  expect(engineer.getRole()).toBe('Engineer');
});