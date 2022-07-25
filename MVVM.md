## MVVM

### 1 数据劫持

采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

### 2 发布者模式

订阅器：Dep

我们可以使用自定义的data属性在HTML代码中指明绑定。所有绑定起来的JavaScript对象以及DOM元素都将“订阅”一个发布者对象。任何时候如果JavaScript对象或者一个HTML输入字段被侦测到发生了变化，我们将代理事件到发布者-订阅者模式，这会反过来将变化广播并传播到所有绑定的对象和元素。

### 3 单向绑定

通过修改_data变量值，将变量更新显示在界面中，实现单向绑定



### 4 双向绑定

通过在界面输入框更新值，在界面上重新显示更新在界面上的值