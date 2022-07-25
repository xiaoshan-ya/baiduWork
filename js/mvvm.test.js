defineReactive = require('../js/observerJS');

describe('数据劫持测试', () =>{
    test('data中劫持到的数据应该和newVal一样', () =>{
        let newVal = 'dear';
        defineReactive.set(newVal);
        expect(defineReactive.get()).toBe(newVal);
    })
})

describe('双向绑定', () =>{
    test('', () =>{

    })
})