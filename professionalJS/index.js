function SuperType (name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}
SubType.prototype = new SuperType()
SubType.prototype.sayAge = function () {
    console.log(this.age)
}
var instance1 = new SubType('sunhaifeng', 18)
instance1.colors.push('black')
console.log(instance1.colors) //'red, blue, green, black'
instance1.sayName() // 'sunhaifeng'
instance1.sayAge() // 18
var instance2 = new SubType('greg', 27)
console.log(instance2.colors) //'red,blue,green'
instance2.sayName() // 'greg'
instance2.sayAge() // 27
console.log(SubType.prototype)
console.log(instance1)