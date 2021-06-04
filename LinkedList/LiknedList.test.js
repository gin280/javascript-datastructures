const LinkedList = require('./LinkedList');

test('LinkedList', function () {
  let linkedList = new LinkedList();
  linkedList.append(4)
  linkedList.append(7)
  expect(linkedList.toString()).toBe('4,7')
  expect(linkedList.removeAt(-1)).toBe(null)
  expect(linkedList.removeAt(3)).toBe(null)
  expect(linkedList.removeAt(1)).toBe(7)
  expect(linkedList.removeAt(0)).toBe(4)
  expect(linkedList.toString()).toBe('')
  expect(linkedList.insert(0, 1))
  expect(linkedList.insert(1, 2))
  expect(linkedList.insert(0, 3))
  expect(linkedList.insert(-1, 8))
  expect(linkedList.insert(4, 4))
  expect(linkedList.toString()).toBe('3,1,2')
  expect(linkedList.indexOf(2)).toBe(2)
  expect(linkedList.indexOf(1)).toBe(1)
  expect(linkedList.indexOf(14)).toBe(-1)
  expect(linkedList.remove(2)).toBe(2)
  expect(linkedList.remove(1)).toBe(1)
  expect(linkedList.toString()).toBe('3')
  expect(linkedList.isEmpty()).toBeFalsy()
  expect(linkedList.size()).toBe(1)
  expect(linkedList.getHead()).toEqual({'element': 3, 'next': null})
  
})
