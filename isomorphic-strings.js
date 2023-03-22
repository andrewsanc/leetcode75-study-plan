// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Solution #1 Optimal/Brute Force - Space(O(n)), Time(O(n))
function isIsomorphic(s, t) {
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (sMap[sChar] || tMap[tChar]) {
      if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
        return false;
      }
    }

    sMap[sChar] = tChar;
    tMap[tChar] = sChar;
  }
  return true;
}
