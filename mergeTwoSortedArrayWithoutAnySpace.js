// BruteForce Approach
function merge(arr1, arr2, n, m) {
    let arr3 = new Array(n + m);
    let left = 0;
    let right = 0;
    let index = 0;

    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++, index++;
        }
        else {
            arr3[index] = arr2[right];
            right++, index++;
        }
    }
    while (left < n) {
        arr3[index++] = arr1[left++];
    }
    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    // Update arr1 and arr2
    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
}
//Optimal Approach
function merge(arr1, arr2, n, m) {
    let left = n - 1;
    let right = 0;

    while (left >= 0 && right < m) {
        if (arr1[left] >= arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]]; // Swap elements
            left--;
            right++;
        } else {
            break; // Break the loop if arr1[left] < arr2[right]
        }
    }

    // Sort arr1 and arr2 if needed
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}
//Another optimal
function merge(nums1, m, nums2, n) {
    let left = m - 1; // Index of last element in nums1
    let right = n - 1; // Index of last element in nums2
    let index = m + n - 1; // Index of last merged element in nums1

    while (left >= 0 && right >= 0) {
        if (nums1[left] > nums2[right]) {
            nums1[index--] = nums1[left--]; // Move larger element from nums1 to the end
        } else {
            nums1[index--] = nums2[right--]; // Move element from nums2 to the end
        }
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (right >= 0) {
        nums1[index--] = nums2[right--];
    }
}

