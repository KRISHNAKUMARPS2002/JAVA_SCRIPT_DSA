// //Min and Max in Array

// function getMinMax(arr, n) {
//     let min = arr[0];
//     let max = arr[0];

//     for(let i = 1; i < n; i++) {
//         if(arr[i] < min) min = arr[i];
//         if(arr[i] > max) max = arr[i];
//     }
//     return [min, max];
// }

// const arr = [3, 1, 7, 9, 2, 5];
// const n = arr.length;

// const [min, max] = getMinMax(arr, n);
// // console.log("Minimum value:", min); // Output: 1
// // console.log("Maximum value:", max); // Output: 9

// // Brutforce solution

// function sortArray(arr) {
//     arr.sort((a, b) => a - b);
//     return [arr[0], arr[arr.length - 1]];  //To get smallest and larges element
// }

// const arr1 = [3, 1, 7, 9, 2, 5];
// // console.log(sortArray(arr1));


// //Find Second Smallest and Second Largest Element in an array

// //Brute Force Approach

// function sortArray1(arr) {
//     arr.sort((a, b) => a-b);
//     let small = arr[1];
//     let large = arr[arr.length-2];
//     //console.log("Second smallest is " + small);
//     //console.log("Second largest is " + large);
// }
// const arr2 = [1, 2, 4, 6, 7, 5];
// sortArray1(arr2);


// //Better Way
// function getElements(arr) {
//     if (arr.length === 0 || arr.length === 1) {
//         console.log(-1 + " " + -1); // Edge case when only one element is present in the array
//         return;
//     }
//     let small = Infinity;
//     let second_small = Infinity;
//     let large = -Infinity;
//     let second_large = -Infinity;

//     for(let i = 0; i < arr.length; i++) {
//         small = Math.min(small, arr[i]);
//         large = Math.max(large, arr[i]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < second_small && arr[i] !== small)
//           second_small = arr[i];
//         if (arr[i] > second_large && arr[i] !== large)
//           second_large = arr[i];
//       }
    
//       //console.log("Second smallest is " + second_small);
//       //console.log("Second largest is " + second_large);
// }
// const arr3 = [1, 2, 4, 6, 7, 5];
// getElements(arr3);

// //Optimised way...
// function secondSmallest(arr) {
//     if (arr.length < 2)
//       return -1;
//     let small = Infinity;
//     let second_small = Infinity;

//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i] < small) {
//             second_small = small;
//             small = arr[i];
//         }else if(arr[i] < second_small && arr[i] !== small) {
//             second_small = arr[i];
//         }
//     }
//     return second_small;
// }

// function secondLargest(arr) {
//     if (arr.length < 2)
//       return -1;
  
//     let large = -Infinity;
//     let second_large = -Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > large) {
//         second_large = large;
//         large = arr[i];
//       } else if (arr[i] > second_large && arr[i] !== large) {
//         second_large = arr[i];
//       }
//     }
  
//     return second_large;
//   }
  
//   const arr4 = [8, 4, 2, 4, 7, 7, 5, 10, 9];
//   const sS = secondSmallest(arr4);
//   const sL = secondLargest(arr4);
  
// // console.log("Second smallest is " + sS);
// //console.log("Second largest is " + sL);


// // Check if an Array is Sorted
// // Brutforce method

// function isSorted(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i])
//           return false;
//       }
//     }
  
//     return true;
//   }
  
//   const arr5 = [1, 2, 6, 4, 5];
//   const ans = isSorted(arr5);
//   //if (ans) console.log("True");
//   //else console.log("False");

// //Optimal approach


// function isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1])
//         return false;
//     }
  
//     return true;
//   }
  
//   const arr6 = [1, 2, 3, 4, 5];
  
//   //console.log(isSorted(arr6) ? "True" : "False");


//   //Remove Duplicates in-place from Sorted Array

//   function removeDuplicates(arr) {
//     let set = new Set(arr);
//     let uniqueArray = Array.from(set);
//     for(let i = 0; i < uniqueArray.length; i++){
//         arr[i] = uniqueArray[i];
//     }
//     return uniqueArray.length;
//   }

//   const arrr = [1, 1, 2, 2, 2, 3, 3];
//   const k = removeDuplicates(arrr);
  
//   //console.log("The array after removing duplicate elements is:");
//   for (let i = 0; i < k; i++) {
//     //console.log(arrr[i]);
//   }

// // Optimized Way

// function removeDuplicates(arr) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       }
//     }
//     return i + 1;
//   }
  
//   const arrr1 = [1, 1, 2, 2, 2, 3, 3];
//   const L = removeDuplicates(arrr1);
  
//   console.log("The array after removing duplicate elements is:");
//   for (let i = 0; i < L; i++) {
//     console.log(arrr1[i]);
//   }
  
  //Reverse an array 

  function reverse(arr, n) {
    let newArr = [];
    for(let i = n - 1; i >= 0; i--) {
      newArr[n - i -1] = arr[i];
    }
    return newArr; 
  }
  //const inputArr = [2, 3, 4, 5, 6, 7];
  //const n = inputArr.length;
  //console.log(reverse(inputArr, n));

  //Second Method

  function reverse2(arr, n) {
    let p1 = 0;
    let p2 = n - 1;

    while(p1 < p2) {
      let temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;

      p1++;
      p2--;
    }
    return arr;
  }

  // const inputArr = [2, 3, 4, 5, 6, 7];
  // const n = inputArr.length;
  // console.log(reverse2(inputArr, n));
  