---
# 新文章：複製這個檔案，改成不以 _ 開頭的檔名（例如 my-first-writeup.md）。
# 檔名就是網址：src/content/blog/my-first-writeup.md → /blog/my-first-writeup/
# 也可以用資料夾：src/content/blog/ctf-2026/pwn-1.md → /blog/ctf-2026/pwn-1/
title: Leetcode 3364. Minimum Positive Sum Subarray
description: Leetcode daily question (11/14)
published: 2026-11-14
# updated: 2026-11-20
# 分類：ctf / leetcode / misc（定義在 src/config.ts 的 CATEGORIES；不寫就是 misc）
category: leetcode
tags: [Array, Sliding window]
draft: false
---

## Description
You are given an integer array nums and two integers l and r. Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.

Return the minimum sum of such a subarray. If no such subarray exists, return -1.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = `[3, -2, 1, 4]`, l = 2, r = 3

Output: 1

Explanation:

The subarrays of length between `l = 2` and `r = 3` where the sum is greater than 0 are:

- `[3, -2]` with a sum of 1
- `[1, 4]` with a sum of 5
- `[3, -2, 1]` with a sum of 2
- `[-2, 1, 4]` with a sum of 3

Out of these, the subarray `[3, -2]` has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.

Constraints:

- `1 <= nums.length <= 100`
- `1 <= l <= r <= nums.length`
- `-1000 <= nums[i] <= 1000`


## Solutions


### 1. Brute Force

因為 `nums.length` 最多只有到 100,所以可以直接把所有符合條件的 subarray 全部算過一次

- 第一層迴圈指定 sliding window 的大小 `windowSize`
- 第二層迴圈指定起點 `i`
- 第三層迴圈計算目前的 window 的總和 `sum`
- 如果 `sum > 0` 那就更新答案的值 `ans = min(ans, sum)`
- 最後 return 去看 `ans` 是否為 `INT_MAX` 根據結果決定要回傳 `-1` 還是 `ans` 

```cpp
class Solution {
public:
    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();        

        int ans = INT_MAX;
        for (int windowSize = l; windowSize <= r; windowSize++) {
            for (int i = 0; i < n - windowSize + 1; i++) {
                int sum = 0;
                for (int j = i; j < i + windowSize; j++) {
                    sum += nums[j];
                }
                if (sum > 0) ans = min(ans, sum);
            }
        }

        return ans == INT_MAX ? -1 : ans;
    }
};
```

- Time Complexity : `O(n^3)`
- Space Complexity : `O(1)`

### 2. Bounded Brute Force

Brute Force 的 solution 可以再進一步被優化:
- 把 `windowSize` 這層迴圈拿掉
- 改成在計算 `sum` 的時候就順便檢查 window 的大小有沒有超過 `r` 就好了

```cpp
class Solution {
public:
    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();        

        int ans = INT_MAX;
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                int len = j - i + 1;
                if (len > r) break;
                sum += nums[j];
                if (len >= l && len <= r && sum > 0) ans = min(ans, sum);
            }
        }

        return ans == INT_MAX ? -1 : ans;
    }
};
```

- Time Complexity : `O(n^2)`
- Space Complexity : `O(1)`

- AC

![Accepted](./ac.png)
