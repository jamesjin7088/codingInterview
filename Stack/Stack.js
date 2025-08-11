class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[--this.index];
    return result;
  }
}

let stack = new Stack();

// class Stack {
//   constructor() {
//     this._arr = [];
//   }

//   push(item) {
//     this._arr.push(item);
//   }

//   pop() {
//     return this._arr.pop();
//   }

//   peek() {
//     return this._arr[this._arr.length - 1];
//   }
// }
