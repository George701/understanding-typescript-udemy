const person: {name: string, age: number, hobbies: string[]} = {
  name: 'George',
  age: 24,
  hobbies: ['Sports, Cooking'],
};

let favoriteActivities: string[];
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1]
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}