let person = {
    name: 'Mosh',
    age: 30
} // object literal


// Dot notation
person.name = 'John';

// Bracket notation, single or double quots
person['name'] = 'Mary';

// Bracket notation, variable changes at runtime
let selection = 'name';
person[selection] = 'Mary';

console.log(person);