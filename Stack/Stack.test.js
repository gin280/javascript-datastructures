// 导入 Stack
const Stack = require('./Stack')

test('Stack', function () {
  // 实例化一个 stack 对象
  const stack = new Stack();

  // 期望 stack 为空
  expect(stack.isEmpty()).toBeTruthy()

  stack.push(4)
  stack.push(7)

  // 期望 stack 删除并返回的是7
  expect(stack.pop()).toBe(7)

  // 期望 stack 转化成字符串'4'
  expect(stack.toString()).toBe('4')

  stack.push(6)
  // 期望 stack 最后一个元素是6
  expect(stack.peek()).toBe(6)
  // 期望 stack 的长度为2
  expect(stack.size()).toBe(2)
  // 期望 stack 不为空
  expect(stack.isEmpty()).toBeFalsy()

  stack.clear()
  // 期望 stack 长度为0
  expect(stack.size()).toBe(0)
})
