
function Observer(data) {
    this.data = data;

    // console.log("这是一个输出");
    // console.log(data);

    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);

        // console.log("这是一个输出");
        // console.log(this.data, key, val);
    },

    defineReactive: function(data, key, val) {
        var dep = new Dep();

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }

                val = newVal;

                // console.log("数据劫持");
                // console.log("newVal:"+newVal, ",data.someStr:"+data.someStr);

                // 通知订阅者
                dep.notify();
            }
        });
    }

};

// 进行数据劫持测试
// module.exports = Observer.prototype.defineReactive;
// export default Observer.prototype.defineReactive;

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;