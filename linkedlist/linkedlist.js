/** 结点类 */
class Node {
  constructor (value) {
    /** 结点属性 */
    this.value = value
    /**
     * 下一个结点
     * @type {Node}
     */
    this.next = null
  }
}

export class LinkedList {

  constructor () {

    let _length = 0

    /** @type {Node} */
    const _head = new Node(null)

    Object.assign(this, {
      append (value) {
        const node = new Node(value)
        if (_head.next === null) {
          _head.next = node
        } else {
          const current = this.getAt(_length - 1)
          current.next = node
        }
        _length++
        return this
      },

      insert (index, value) {
        if (index < 0 || index > _length) {
          return false
        }
        const node = new Node(value)
        if (index === 0) {
          node.next = _head.next
          _head.next = node
        } else {
          const previous = this.getAt(index - 1)
          node.next = previous.next
          previous.next = node
        }
        _length++
        return true
      },

      removeAt (index) {
        if (index < 0 || index >= _length) {
          return null
        }
        let current = _head.next
        if (index === 0) {
          _head.next = current.next
        } else {
          const previous = this.getAt(index - 1)
          current = previous.next
          previous.next = current.next
        }
        _length--
        return current.value
      },

      remove (value) {
        let current = _head.next
        let previous = _head
        while (current) {
          if (current.value === value) {
            previous.next = current.next
            _length--
            return
          }
          previous = previous.next
          current = current.next
        }
      },

      removeAll (value) {
        let current = _head.next
        let previous = _head
        while (current) {
          if (current.value === value) {
            previous.next = current.next
            _length--
          } else {
            previous = previous.next
          }
          current = current.next
        }
      },

      indexOf (value) {
        let current = _head.next
        for (let i = 0; i < _length; i++) {
          if (current.value === value) {
            return i
          }
          current = current.next
        }
        return -1
      },

      getAt (index) {
        if (index < 0 || index >= _length) {
          return null
        }
        let current = _head.next
        for (let i = 0; i < index; i++) {
          current = current.next
        }
        return current
      },

      isEmpty () {
        return _length === 0
      },

      size () {
        return _length
      },

      clear () {
        _head.next = null
        _length = 0
      },

      toString () {
        this.toArray().toString()
      },

      toArray () {
        const arr = []
        let current = _head.next
        while (current) {
          arr.push(current.value)
          current = current.next
        }
        return arr
      },
    })

  }

}

