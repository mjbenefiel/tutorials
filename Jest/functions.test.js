const functions = require("./functions");

/*beforeEach(() => initDatabase())
afterEach(() => closeDatabase())

const initDatabase = () => console.log('Database Initialized')
const closeDatabase = () => console.log('Database Closed') */
const nameCheck = () => console.log('Checking name')

describe('Checking Names', () => {
  beforeEach(() => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff')
  })

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen')
  })
})


test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("user should be Mike Benefiel object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Mike",
    lastName: "Benefiel"
  });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Admin should be in user name", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data

// Promise
/*test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
}); */

// Async/Await

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
