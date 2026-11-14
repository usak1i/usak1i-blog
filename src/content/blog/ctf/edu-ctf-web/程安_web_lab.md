---
# 新文章：複製這個檔案，改成不以 _ 開頭的檔名（例如 my-first-writeup.md）。
# 檔名就是網址：src/content/blog/my-first-writeup.md → /blog/my-first-writeup/
# 也可以用資料夾：src/content/blog/ctf-2026/pwn-1.md → /blog/ctf-2026/pwn-1/
title: edu-ctf 2026 web labs
description: 程式安全 2026 web labs
published: 2026-11-14
# updated: 2026-11-20
# 分類：ctf / leetcode / misc（定義在 src/config.ts 的 CATEGORIES；不寫就是 misc）
category: ctf
tags: [web]
draft: false
---


## Week 3

- CSRF
- XSS
- Markdown note

### XSS

```javascript
<script>alert('pwned')</script>
```

<!-- TODO: 把圖片放到 src/content/blog/ctf/ 後再打開：![說明文字](./image.png) -->
