function numberChecker(numbers) {
    return function(num) {
      return numbers.includes(num);
    };
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const isNumberInArray = numberChecker(numbers);
  
  console.log(isNumberInArray(3)); 
  console.log(isNumberInArray(6)); 
  