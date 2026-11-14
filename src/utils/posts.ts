import { getCollection } from "astro:content";
import { CATEGORIES, type CategoryId } from "../config";

/**
 * 取得所有文章（正式 build 時排除草稿），依發布時間由新到舊排序。
 * published 只寫日期的話同一天的文章時間相同，這時再依標題排，讓順序固定；
 * 想控制同一天的先後，就在 published 加上時間（見 _template.md）。
 */
export async function getSortedPosts() {
    const posts = await getCollection("blog", ({ data }) =>
        import.meta.env.PROD ? !data.draft : true,
    );
    return posts.sort(
        (a, b) =>
            b.data.published.valueOf() - a.data.published.valueOf() ||
            a.data.title.localeCompare(b.data.title, "en", { numeric: true }),
    );
}

/** 網站以台灣時間顯示日期（Cloudflare 的 build 機器是 UTC，不指定的話跨日附近會差一天） */
const TIME_ZONE = "Asia/Taipei";

export function formatDate(date: Date) {
    return date.toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: TIME_ZONE,
    });
}

/** 所有分類（依 config 的順序），附上該分類的文章 */
export async function getCategoriesWithPosts() {
    const posts = await getSortedPosts();
    return (Object.keys(CATEGORIES) as CategoryId[]).map((id) => ({
        id,
        ...CATEGORIES[id],
        href: categoryHref(id),
        posts: posts.filter((post) => post.data.category === id),
    }));
}

export function categoryHref(id: CategoryId) {
    return `/blog/category/${id}/`;
}

export function categoryLabel(id: CategoryId) {
    return CATEGORIES[id].label;
}

/**
 * tag 在網址裡用的形式：去頭尾空白、轉小寫、空白和 / 換成 -。
 * 所以 "Web"、"web" 會算同一個 tag。
 */
export function tagSlug(tag: string) {
    return tag.trim().toLowerCase().replace(/[\s/]+/g, "-");
}

export function tagHref(tag: string) {
    return `/blog/tag/${encodeURIComponent(tagSlug(tag))}/`;
}

/** 所有出現過的 tag，附上文章，依出現次數多到少（同次數依名稱）排序 */
export async function getTagsWithPosts() {
    const posts = await getSortedPosts();
    const tags = new Map<
        string,
        { slug: string; label: string; href: string; posts: typeof posts }
    >();

    for (const post of posts) {
        // 同一篇文章重複寫同一個 tag 只算一次
        const slugs = new Set<string>();
        for (const tag of post.data.tags) {
            const slug = tagSlug(tag);
            if (!slug || slugs.has(slug)) continue;
            slugs.add(slug);

            if (!tags.has(slug)) {
                // 顯示名稱用第一次出現時的寫法
                tags.set(slug, { slug, label: tag.trim(), href: tagHref(tag), posts: [] });
            }
            tags.get(slug)!.posts.push(post);
        }
    }

    return [...tags.values()].sort(
        (a, b) => b.posts.length - a.posts.length || a.label.localeCompare(b.label),
    );
}
