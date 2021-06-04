function Stack() {
  // 私有变量 items 用于记录数组， 不能直接操作
  let items = [];
  // 类方法 push， 在数组末尾添加元素， 可以直接调用
  this.push = function (element) {
    items.push(element);
  }
  // 删除并返回数组末尾的元素
  this.pop = function (element) {
    return items.pop()
  }
  // 查看数组的最后一个元素
  this.peek = function (element) {
    return items[items.length - 1]
  }
  // 判断数组是否为空
  this.isEmpty = function () {
    return items.length == 0
  }
  // 清空数组
  this.clear = function () {
    items = []
  }
  // 返回数组长度
  this.size = function () {
    return items.length
  }
  // 将数组转为字符串并返回
  this.toString = function () {
    return items.toString()
  }
}

module.exports = Stack;