#!/usr/bin/node
class Square extends ParentSquare {
    constructor(size) {
      super(size);
    }
  
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
  
      if (c === 'X') {
        // Print 'X' characters
        for (let i = 0; i < this.size; i++) {
          console.log(c.repeat(this.size));
        }
      } else if (c === 'C') {
        // Print 'C' characters
        for (let i = 0; i < this.size; i++) {
          console.log(c.repeat(this.size));
        }
      }
    }
  }
  
  module.exports = Square;
  
