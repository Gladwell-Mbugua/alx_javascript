#!/usr/bin/node
const ParentSquare = require('./5-square');

class Square extends ParentSquare {
    constructor(size) {
      super(size);
    }
  
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
      if (c.length > 1) {
        // Print the first character of c if it's a multi-character string
        c = c[0];
      }
  
      for (let i = 0; i < this.size; i++) {
        console.log(c.repeat(this.size));
      }
    }
  }
  
  module.exports = Square;  
