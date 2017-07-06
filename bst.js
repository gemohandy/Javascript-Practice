unsortArray = [2,45,33,23,42,100,1,3,99,4,56,16,77];
console.log(unsortArray);
sortedArray = unsortArray.sort(function(a,b){return a-b;});
console.log(sortedArray);

//Tree:
//33, 

/*function binaryOrder(sortArray){
  if(sortArray<=1){
    return sortArray;
  }
  newArray = [];
  midpoint = Math.ceil(sortArray.length/2-1);
  firstPart = binaryOrder(sortArray.splice(0,midpoint));
  newArray = newArray.concat(firstPart, binaryOrder(sortArray.splice(1)));
  console.log(newArray);
  return newArray;
}

console.log(binaryOrder(sortedArray));
*/
