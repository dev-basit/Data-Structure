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
}
