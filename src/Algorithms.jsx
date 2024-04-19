  //1
  function exchangePairs(array) {
    for (let i = 0; i < array.length; i += 2) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
    return array.join("");
  }
  
  const inputArray = [1, 2, 3, 4, 2, 3];
  const result = exchangePairs(inputArray);
  console.log(result); 

  //2
  function calculateDifference(array) {
    let result = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) {
        result += array[i + 1] - array[i];
      }
    }
    return result;
  }
  
  const example1 = [8, 2, 5, 6, 1, 4];
  console.log("Example 1: ", calculateDifference(example1)); 
  
  const example2 = [12, 10, 8, 5, 4];
  console.log("Example 2: ", calculateDifference(example2)); 
  
  const example3 = [9, 35, 5, 17, 1, 3];
  console.log("Example 3: ", calculateDifference(example3)); 
  