function convertToNumber(str) {
  try {
    return Number(str);
  } catch {
    return console.log("Invalid number");
  }
}


console.log(convertToNumber("123")); // 42
console.log(convertToNumber("abc")); // 3.14


