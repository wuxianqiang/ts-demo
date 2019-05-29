import * as sinon from 'sinon'
import * as chai from 'chai'
import Todo from '../src/todo'

describe('测试TODO', function () {
  it('测试', function () {
    let store = {save () {}}
    let t = new Todo(store)
    sinon.spy(console, 'log')
    t.add('eat')
    t.add('sleep')
    t.print()
    chai.expect(console.log.calledOnce).to.be.true
  })
})

describe('测试TODO', function () {
  it ('测试', function () {
    let store = {save() {}}
    let t= new Todo(store)
    const stubAdd = sinon.stub(t, 'add').callsFake(() => {})
    t.print()
    chai.expect(stubAdd.calledOnce).to.be.true
  })
})

// 监控某个方法是否被调用过
describe('测试TODO', function () {
  it ('测试', function () {
    let store = {save() {}}
    let t = new Todo(store)
    const mock = sinon.mock(console)
    mock.expects('log').calledOnce;
    t.add('eat')
    t.print()
    mock.verify()
  })
})
