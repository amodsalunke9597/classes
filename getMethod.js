function getPerson(person) {
    try {
      if (typeof person !== "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
  }
  

  console.log(getPerson({name: "amod", age: "25"}));
  console.log(getPerson({name: "amod"}));