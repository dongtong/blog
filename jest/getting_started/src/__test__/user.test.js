import User from '../user';

describe("User Test Suite", () => {
  test("Get full name", () => {
    const user = new User({firstName: 'foo', lastName: 'bar'});
    expect(user.fullName).toBe('foo bar');
  });
});