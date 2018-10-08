let unsorted = [1, 8, 6, 2, 5, 4, 3, 7, 9, 12, 14, 13, 15, 10, 11]


function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }
  var arr2 = arr.splice(0, Math.ceil(arr.length / 2));
  return merge(mergeSort(arr), mergeSort(arr2));
}

function merge(arr, arr2) {
  var emptyArr = [];

  while (arr.length && arr2.length) {
    if (arr[0] < arr2[0]) {
      emptyArr.push(arr.shift());
    } else {
      emptyArr.push(arr2.shift());
    }
  }
 while(arr.length){
   emptyArr.push(arr.shift())
 }
 while(arr2.length){
   emptyArr.push(arr2.shift())
 }
  return emptyArr;
}

console.log(mergeSort(unsorted));