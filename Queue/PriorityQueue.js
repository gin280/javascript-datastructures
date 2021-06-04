function PriorityQueue() {
  let items = [];

  // 利用构造器函数创建队列元素
  let QueueElement = function(element, priority) {
    this.element = element;
    this.priority = priority
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);

    // 张三的情况
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      let added = false
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      // 王五的情况
      if (!added) {
        items.push(queueElement)
      }
    }
  }

  this.dequeue = function() {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.size = function () {
    return items.length
  }
  this.toString = function () {
    let string = ''
    for (let i = 0; i < items.length; i++) {
      string += items[i].element + '-' + items[i].priority + (items.length - i > 1 ? ',' : '')
    }
    return string
  }
}

module.exports = PriorityQueue;