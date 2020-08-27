enum Permission {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string],
  permission: Permission,
} = {
  name: 'George',
  age: 24,
  hobbies: ['Sports, Cooking'],
  role: [2, 'author'],
  permission: Permission.ADMIN
};

// person.role.push('admin'); // Tupes allows to push elements in them :(
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1]
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.permission === Permission.ADMIN) console.log('You are admin');