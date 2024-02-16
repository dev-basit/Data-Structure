class MyArray {
  constructor(length = 0, data = []) {
    this.length = length;
    this.data = data;
  }
  print() {
    //    console.log(this.data); // is k through undefined b show hta ta, jb element ko remove kia jata to, islye isko comment krdia
    for (let i = 0; i < this.length; i++) {
      console.log(this.data[i]);
    }
  }

  getlength() {
    return this.length;
  }

  indexof(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        return i;
      }
    }
    return -1;
  }

  // also called push
  insert(data) {
    this.data[this.length++] = data;
    // return this.length;
  }

  // delete last item
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    // if you want, you can return it by first copying lastitem value in third variable and then returning it
  }

  // delete at specific index
  // delete, (other name)
  removeAt(index) {
    // Validate the index
    if (index < 0 || index >= this.length) throw new Error("index is invalid");

    // shift the items to the left to fill the hole, we can create separate function for this shifting operation, ztm has done it
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    // before decremneting, you must delete the last item, otherwise it will remain in memory
    delete this.data[this.length - 1];
    this.length--;
  }

  // other methods to implement -> lastIndexOf, contains(return boolean)
  // finding max, array,intersect(find common item in 2 arrays, array,reverse(), )
}
