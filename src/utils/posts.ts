import { getCollection } from "astro:content";

/** 取得所有文章（正式 build 時排除草稿），依發布日期由新到舊排序 */
export async function getSortedPosts() {
    const posts = await getCollection("blog", ({ data }) =>
        import.meta.env.PROD ? !data.draft : true,
    );
    return posts.sort(
        (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
    );
}

export function formatDate(date: Date) {
    return date.toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}
