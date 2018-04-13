function Parent () {
    this.name = 'parent'
    this.play = [1,3,4]
}
Parent.prototype.say = [1,1,1]
function Child () {
    Parent.call(this)
    this.name = 'child'
}
function Child1 () {    
    Parent.call(this)
    this.name= 'child1'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

Child1.prototype = Object.create(Parent.prototype)
Child1.prototype.constructor = Child1

var child = new Child()
var child1 = new Child1()

child.play.push(2)
console.log(child.play)
console.log(child1.play)

child.say.push(2)
console.log(child.say)
console.log(child1.say)