---
title: Hello World
description: 範例文章，確認版面後可以刪掉。
published: 2026-11-14
category: misc
tags: [example]
---

這是一篇範例文章，用來確認文章列表和內文版面。

## 程式碼

```python
from pwn import *

io = remote("chall.example.com", 1337)
io.sendline(b"A" * 0x48 + p64(0xdeadbeef))
io.interactive()
```

行內程式碼：`checksec ./chall`

## 其他元素

> 引用區塊

- 清單項目一
- 清單項目二

| Challenge | Category | Points |
| --------- | -------- | ------ |
| baby-heap | pwn      | 100    |
