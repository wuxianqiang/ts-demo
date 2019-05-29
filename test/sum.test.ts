import sum from '../src/sum'
import * as assert from 'assert' // node断言库在node使用
import * as chai from 'chai' // 浏览器和node都能用

describe('测试sum.ts', function () {
  it ('1+1=2', function () {
    assert.equal(sum(1, 1), 2)
  })
  it ('2+2=4', function () {
    chai.expect(2 + 2).to.be.equal(4)
  })
  it ('0.1+0.2=0.3', function () {
    chai.expect(0.1 + 0.2).to.be.equal(0.3)
  })
})
