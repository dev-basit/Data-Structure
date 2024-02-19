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
    return -1; // value doesnt exist
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

console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n");
let numbers = new MyArray();
console.log("printing numbers array");
numbers.print();

console.log("\nnow inserting 3 elements");
numbers.insert(2);
numbers.insert(6);
numbers.insert(3);

console.log("\nprinting numbers1 array");
numbers.print();

console.log("\nremoving at index 0");
numbers.removeAt(0);

console.log("\nprinting numberss array");
numbers.print();

console.log("\nlength of numbers array");
console.log(numbers.getlength());

console.log("\nfinding index of");
console.log("index of 6, ", numbers.indexof(6));
console.log("index of 10, ", numbers.indexof(10));

console.log("\nDeleting last item");
numbers.pop();
console.log("Again deleting last item");
numbers.pop();

console.log("\nprinting numbers array");
numbers.print();

console.log("\nlength of numbers array");
console.log(numbers.getlength());

console.log("\n---------------now using constructor values\n");

let numbers2 = new MyArray(5, [1, 2, 3, 4, 5]);

console.log("\nprinting numbers1 array");
numbers2.print();

console.log("\nnow inserting 2 elements");
numbers2.insert(7);
numbers2.insert(2);
console.log("\nprinting numbers1 array");
numbers2.print();

console.log("\nremoving at index 0");
numbers2.removeAt(0);
console.log("\nremoving at index (3");
numbers2.removeAt(3);

console.log("\nprinting numbers1 array");
numbers2.print();

console.log("\nlength of numbers2 array");
console.log(numbers2.getlength());

console.log("\nfinding index of");
console.log("index of 3, ", numbers2.indexof(3));
console.log("index of 10, ", numbers2.indexof(10));

console.log("\nDeleting last item");
numbers2.pop();
console.log("Again deleting last item");
numbers2.pop();

console.log("\nprinting numbers array");
numbers2.print();

console.log("\nlength of numbers2 array");
console.log(numbers2.getlength());

console.log("\n==============================\n");
