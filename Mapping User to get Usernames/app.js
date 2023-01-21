// 1. Write code to get array of names from given array of users
// 2. Get back on active user
// 3. Sort user by age descending
const users = [
  { id: 1, name: "Jack", isActive: false, age: 20 },
  { id: 1, name: "John", isActive: true, age: 25 },
  { id: 1, name: "Mike", isActive: false, age: 15 },
  { id: 1, name: "Jacob", isActive: true, age: 5 },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

const activeUsers = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(activeUsers);

const sortedUsers = () => {
  const _users = [...users];
  return _users.sort((a, b) => a.age - b.age);
};

const userByAge = sortedUsers()
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(userByAge);

// I didn't really like this course because when he explains using sort he mentions
// that it mutates the original array and
// doesn't mention a way of doing it without mutating the original.
// I suppose in an interview you might ask if they want the original mutated or not
// I would just a soon assume not to mutate the original