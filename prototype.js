function Student(name) {
    this.name = name;
  }
  
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const student1 = new Student("Mithun");
  student1.printDetails(); 
  