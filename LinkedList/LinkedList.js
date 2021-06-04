function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0
  let head = null

  this.append = function (element) {
    let node = new Node(element);
    let current = null

    // 链表为空直接将 head 指向新元素
    if (head === null) {
      head = node;
    } else {
      // 链表不为空需要将 current 移动到最后一个元素
      current = head;
      while (current.next) {
        current = current.next;
      }
      // 然后将最后一个元素的 next 属性指向新元素
      current.next = node
    }
    length++
  }

  this.removeAt = function (position) {
    // 用于跳过异常情况
    if (position > -1 && position < length) {
      let current = head;
      let previous = null;
      index = 0
      //删除头部元素
      if (position === 0) {
        head = current.next
      } else {
        // 找出指定位置元素， 并让它的前一个元素连接它的后一个元素
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
      }
      length--
      return current.element
    }
    return null
  }

  this.insert = function (position, element) {
    // 用于跳过非法输入， 对应第四个和第五个断言
    if (position > -1 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0
      // 往头部插入， 对应第一个和第三个断言
      if (position === 0) {
        node.next = current
        head = node
      } else {
        // 往非头部插入， 对应第二个断言
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    }
    return false
  }

  this.toString = function () {
    let current = head
    let string = ''

    while (current) {
      string += current.element + (current.next ? ',' : '')
      current = current.next
    }
    return string
  }

  this.indexOf = function (element) {
    let current = head
    let index = 0

    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.isEmpty = function () {
    return length === this
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }
  
}

module.exports = LinkedList;