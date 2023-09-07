#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      super(size, size); // Call the constructor of the parent class (Rectangle) with size for both width and height
    }
  }
  
  module.exports = Square;
  