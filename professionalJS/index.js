var Person = function ( ){}
Person.prototype.name = 'sunhaifeng'
var person = new Person()
console.log(person.hasOwnProperty('name1'))
console.log('name' in Person)