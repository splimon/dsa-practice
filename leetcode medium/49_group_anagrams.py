'''
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
'''

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        # key = tuple representing letter counts
        # value = list of words that match that letter pattern
        # use defaultdict instead of {} because it automatically creates an empty list if a new key is added
        hashMap = defaultdict(list)

        for word in strs:
            count = [0] * 26 # count array of size 26 (a-z) initialized to 0
            for char in word:
                count[ord(char) - ord('a')] += 1 # ord(char) gives the ASCII value of the character, increment by 1
            hashMap[tuple(count)].append(word) # convert count list to tuple to use as dict key
        return list(hashMap.values()) # group anagram lists
