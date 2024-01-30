

// Algorithm
let sortColors = function (arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      swap(mid, high);
      high--;
    }
  }
  console.log(arr);

  function swap(a, b) {
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
};

// Implementation
console.log("The sorted colors array is ");
const sorted = sortColors([2, 0, 2, 1, 1, 0]);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)


// STEPS

// Initialize low, mid, and high pointers.
// Iterate through the array arr using mid pointer.
// Depending on the value at arr[mid], swap elements and update pointers accordingly:
//    If arr[mid] is 0, swap with arr[low], increment both low and mid.
//    If arr[mid] is 1, increment mid.
//    If arr[mid] is 2, swap with arr[high], decrement high, but do not increment mid.
// Continue until mid exceeds high.
// The array is now sorted in-place.
// A swap function is used for element swapping.
