// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://usak1i.me',
    markdown: {
        shikiConfig: {
            // 程式碼高亮同時產生淺色和深色兩組顏色，由 global.css 依主題切換
            themes: { light: 'github-light', dark: 'github-dark' },
        },
    },
});
