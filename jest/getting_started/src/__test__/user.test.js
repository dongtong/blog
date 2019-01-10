import User from '../user';

describe("User Test Suite", () => {
  test("Get full name", () => {
    const user = new User({firstName: 'foo', lastName: 'bar'});
    expect(user.fullName).toBe('foo bar');
  });
});

describe("User snapshot", () => {
  test("test user snapshot", () => {
    const user = new User({firstName: 'foo', lastName: 'bar2'});
    expect(user).toMatchSnapshot();
  });
});

describe("User Hooks", () => {
  let people = [];
  beforeEach(() => {
    people.push(new User({firstName: 'foo', lastName: 'bar'}));
  });
  // let people = [];
  // people.push(new User({firstName: 'foo', lastName: 'bar'}));

  test('Add another user', () => {
    // let people = [];
    // people.push(new User({firstName: 'foo', lastName: 'bar'}));
    people.push(new User({firstName: 'foo', lastName: 'bar2'}));
    expect(people.length).toEqual(2);
  })

  test.only("test last user snapshot", () => {
    // let people = [];
    // people.push(new User({firstName: 'foo', lastName: 'bar'}));
    let user = people[people.length - 1];
    expect(user).toMatchSnapshot();
  });
});