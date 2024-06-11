//Brute Force Approach
function countStudents(arr, pages) {
  var n = arr.length; // size of array
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
    if (pagesStudent + arr[i] <= pages) {
      // add pages to current student
      pagesStudent += arr[i];
    } else {
      // add pages to next student
      students++;
      pagesStudent = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);

  for (var pages = low; pages <= high; pages++) {
    if (countStudents(arr, pages) === m) {
      return pages;
    }
  }
  return low;
}

//Optimal Approach
function countStudents(arr, pages) {
  var n = arr.length; // size of array
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
    if (pagesStudent + arr[i] <= pages) {
      // add pages to current student
      pagesStudent += arr[i];
    } else {
      // add pages to next student
      students++;
      pagesStudent = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var students = countStudents(arr, mid);
    if (students > m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
