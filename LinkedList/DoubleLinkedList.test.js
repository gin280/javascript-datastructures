const DoubleLinkedList = require('./DoubleLinkedList');

test('DoubleLinkedList', function () {
  const doubleLinkedList = new DoubleLinkedList();
  expect(doubleLinkedList.insert(1, 10)).toBeFalsy();
  expect(doubleLinkedList.insert(-1, 10)).toBeFalsy()
  doubleLinkedList.insert(0, 1)
  doubleLinkedList.insert(0, 2)
  doubleLinkedList.insert(1, 3)
  doubleLinkedList.insert(3, 4)
  expect(doubleLinkedList.toString()).toBe('2,3,1,4')

  expect(doubleLinkedList.removeAt(-1)).toBeFalsy()
  expect(doubleLinkedList.toString()).toBe('2,3,1,4')

  expect(doubleLinkedList.removeAt(1)).toBe(3)
  expect(doubleLinkedList.toString()).toBe('2,1,4')

  expect(doubleLinkedList.removeAt(0)).toBe(2)
  expect(doubleLinkedList.toString()).toBe('1,4')
})
