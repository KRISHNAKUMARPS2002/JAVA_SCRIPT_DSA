function freqCount(arr) {
  const visitedArr = new Array(arr.length).fill(false);
  let maxFreq = 0, minFreq = 0;
  let maxElement = 0, minElement = 0;

  for (let i = 0; i < arr.length; i++) {
      if (visitedArr[i] === true) continue;
      let count = 1;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
              visitedArr[j] = true;
              count++;
          }
      }
      //console.log(arr[i] + " " + count);
      if (count > maxFreq) {
          maxElement = arr[i];
          maxFreq = count;
      }
      if (minFreq === 0 || count < minFreq) {
          minElement = arr[i];
          minFreq = count;
      }
  }

  console.log(`Max Element: ${maxElement}, Max Frequency: ${maxFreq}`);
  console.log(`Min Element: ${minElement}, Min Frequency: ${minFreq}`);
}

freqCount([2, 3, 3, 4, 5, 6, 4, 4, 6, 7, 8, 4, 2]);
