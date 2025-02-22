class Stack {
  constructor() {
    this._element = [];
  }
  push(element) {
    this._element.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this._element.pop();
  }
  isEmpty() {
    return this._element.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this._element[this._element.length - 1];
  }
  search(element) {
    if (this.isEmpty()) {
      return -1;
    }
    for (let i = this._element.length - 1; i >= 0; i--) {
      if (this._element[i] === element) {
        return this._element.length - 1 - i;
      }
    }
    return -1;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.isEmpty());
console.log(stack._element);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack._element);
console.log(stack.search(10));
