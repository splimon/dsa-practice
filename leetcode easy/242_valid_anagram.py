'''
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
'''

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        if len(s) != len(t):
            return False
        
        count_s, count_t = {}, {}

        for char in s:
            # Look at the letter
            # If it’s already in the count, add 1
            # If not, start at 0 and make it 1
            count_s[char] = count_s.get(char, 0) + 1

        for char in t:
            # Ex: Let’s say this is the current state of count_s:
            # count_s = {}
            # You see 'a'
            # count_s.get('a', 0) → 0
            # count_s['a'] = 0 + 1 → 1
            # Now count_s becomes:
            # {'a': 1}
            # Next letter a again:
            # count_s.get('a', 0) → 1
            # count_s['a'] = 1 + 1 → 2
            # Now:
            # {'a': 2} and so on
            count_t[char] = count_t.get(char, 0) + 1
        
        return count_s == count_t
