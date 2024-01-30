// Algorithm
let lengthOfLongestSubstring = function (s) {
  let set = new Set(); //collection of unique value, each value can occur only once
  let left = 0;
  let maxSize = 0;

  // check for length
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // length > 1
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      console.log(set);
      left++;
    }
    set.add(s[i]);
    if (i - left + 1 > maxSize) {
      maxSize = i - left + 1;
      longestSubstring = s.slice(left, i + 1); // Update the longest substring
      console.log(longestSubstring); //the longest substring
    }
  }
  return maxSize; //length of the longest substring
};

// Implementation
// const longest = lengthOfLongestSubstring("pwwkew");
const longest = lengthOfLongestSubstring("abcdefabcdefgh"); 
console.log(`The length of the longest substring is ${longest}`);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)
