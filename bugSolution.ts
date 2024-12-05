function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane User", "John Smith"];
console.log(greeterArray(user));

let singleUser = "Jane User";
console.log(greeter(singleUser));