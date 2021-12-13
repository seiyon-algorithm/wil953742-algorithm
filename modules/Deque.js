class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class Deque {
  length;
  head;
  tail;
  constructor(list = []) {
    this.length = 0;
    this.initDeque(list);
  }

  initDeque(list) {
    this.head = null;
    this.tail = null;

    if (list) {
      list.forEach((value) => {
        this.push(value);
      });
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.length) this.head = node;
    else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  pushleft(value) {
    const node = new Node(value);
    if (!this.length) this.tail = node;
    else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.length++;
  }

  pop() {
    if (!this.length) return null;
    const value = this.tail.value;
    this.length--;
    if (!this.length) this.initDeque([]);
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return value;
  }

  popleft() {
    if (!this.length) return null;
    const value = this.head.value;
    this.length--;
    if (!this.length) this.initDeque([]);
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Deque;
