function shf (){
  console.log(this.name)
}
var sfhobj= {name:'sunhaifeng'}
var result = ::shfobj.shf
console.log(result)