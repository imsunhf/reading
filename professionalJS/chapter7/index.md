# 函数表达式

1. 定义函数的两种方式
```
// 函数声名
function functionName(arg0, arg1, arg2) {
  // 函数体
}
// 函数表达式
var functionName = function(arg0, arg1, arg2) {}
```
2. 函数声明一个重要特征就是函数声明提升
```
sayHi()
function sayHi() {
  alert('Hi')
}
// 执行代码之前会先读取函数声明。这意味着可以把函数声明放在调用它的语句后面
```
3. 函数表达式：创建一个匿名函数并把它赋值给functionName(匿名函数也叫拉姆达函数)
4. 理解函数提升的关键就是理解函数声明和函数表达式之间的区别
```
if (condition){
  function sayHi(){
    alert('Hi')
  }
} else {
  function sayHi () {
    alert('yo')
  }
}
这在ECMAScript中属于无效语法，大多数浏览器会返回第二个声明，忽略condition
// 可以这样做
var sayHi;
if (condition) {
  sayHi = function(){
    alert('Hi')
  }
} else {
  sayHi = function () {
    alert('yo')
  }
}
```