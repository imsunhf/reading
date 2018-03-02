var book = {
  year: 1993
}
Object.defineProperty(book, 'age', {
  value: 18
})
var descriptor = Object.getOwnPropertyDescriptor(book, 'year')
var descriptor1 = Object.getOwnPropertyDescriptor(book, 'age')
console.log(descriptor)
console.log(descriptor1)