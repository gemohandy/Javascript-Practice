unsortArray = [2,45,33,23,42,100,1,3,99,4,56,16,77];
console.log(unsortArray);
sortedArray = unsortArray.sort(function(a,b){return a-b;});
console.log(sortedArray);

//Tree:
/*  (2)
(1)     (45)
    (33)    (100)
  (23)(42) (99)
 (3)      (56)
  (4)      (77)
   (16)

*/

function binaryOrder(sortArray){
  if(sortArray<=1){
    return sortArray;
  }
  newArray = [];
  midpoint = Math.floor(sortArray.length/2);
  firstNum = sortArray[midpoint];
  console.log(midpoint);
  firstPart = sortArray.splice(0,midpoint);
  secondPart =sortArray.splice(1);
  newArray.push(firstNum);
  binArray = newArray.concat(binaryOrder(firstPart), binaryOrder(secondPart));
  console.log(firstNum);
  console.log(firstPart);
  console.log(secondPart);
  return binArray;
}

console.log(binaryOrder(sortedArray));
