# 观察者模式

> 观察者模式：又被称作发布-订阅者模式或消息机制，定义了一种依赖关系，解决了主体对象与观察者之间功能的耦合

## 封装好的代码

```
var pubsubClass = {
  list: {},
  regist: function(key, callback) {// 注册信息接口
    // 如果此消息不存在则应该创建一个该消息类型
    if(typeof this.list[key] === 'undefined) {
      this.list[key] = []
    }
    // 将该动作方法推入该消息对应的动作执行序列中
    this.list[key].push(callback)
  },
  fire: function(key, args){//发布信息接口 
    var fns = this.list[key]
    // 如果该消息没有被注册，则返回
    if(!fns || fns.length === 0){
      return
    }
    var len = fns.length
    while(len--){
      // 以此执行注册的消息对应的动作序列
      fns[len].apply(this,args)
    }
  },
  remove: function(key, fn){//移除信息接口
    var fns = this.list[key]
    if(!fns){
      return false
    }
    var len = fns.length
    while(len--){
      // 如果存在该动作则在消息动作序列中移除相应操作
      fns[len] === fn) && fns.splice(len, 1)
    }
  }
}
```



## 案例-使用场景

当用户发布评论时，会在评论展示模块末尾处追加新的评论，与此同时用户的消息模块的消息数量也会递增。如果用户删除留言区的信息时，用户的消息模块消息数量也会递减，但是这三块代码是三位不同的工程师写的，都写在自己的独立闭包模块里，现在要完成我的需求，又不想将他们的模块合并到一起

1. 解决主体对象与观察者之间功能的耦合
2. 利于程序扩展性