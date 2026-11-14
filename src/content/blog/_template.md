---
# 新文章：複製這個檔案，改成不以 _ 開頭的檔名（例如 my-first-writeup.md）。
# 檔名就是網址：src/content/blog/my-first-writeup.md → /blog/my-first-writeup/
# 也可以用資料夾：src/content/blog/ctf-2026/pwn-1.md → /blog/ctf-2026/pwn-1/
title: 文章標題
description: 一句話摘要，會顯示在文章列表和搜尋結果
# 發布時間：可以只寫日期，或寫到時間（+08:00 是台灣時區）；同一天有多篇時用時間決定先後
published: 2026-11-14T21:30:00+08:00
# updated: 2026-11-20
# 分類：ctf / leetcode / misc（定義在 src/config.ts 的 CATEGORIES；不寫就是 misc）
category: ctf
tags: [pwn, heap]
draft: true
---

內文用 Markdown 寫。

圖片放在同一個資料夾，用相對路徑引用，Astro 會自動最佳化。
注意：引用的圖片檔不存在時整個網站會 build 失敗，所以下面的範例先用註解包起來，放好圖片再打開：

<!-- ![說明文字](./image.png) -->
