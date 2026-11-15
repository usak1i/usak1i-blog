/**
 * 個人資料與連結設定 —— 首頁左側的資料卡會讀這裡。
 */

export type IconName =
    | "github"
    | "mail"
    | "x"
    | "rss"
    | "link"
    | "instagram"
    | "discord";

export interface ProfileLink {
    label: string;
    href: string;
    icon: IconName;
}

export const profile = {
    name: "usak1i",
    bio: "CS student. Interesting in software / game development and security research",
    avatar: "/eous.jpg",
    links: [
        { label: "GitHub", href: "https://github.com/usak1i", icon: "github" },
        { label: "Discord", href: "https://discord.com/users/520770300024061972", icon: "discord" },
        { label: "Instagram", href: "https://www.instagram.com/_han._.ch/", icon: "instagram" },
    ] satisfies ProfileLink[],
};

/**
 * 文章分類。key 是寫在文章 frontmatter `category:` 的值，也是網址（/blog/category/<key>/）。
 * 要新增分類就在這裡加一筆；文章填了不存在的分類，build 會直接報錯。
 * 這裡的順序就是分類列表顯示的順序。
 */
export const CATEGORIES = {
    htb: {
        label: "HTB",
        description: "HTB module or machine writeups",
    },
    ctf: {
        label: "CTF",
        description: "CTF writeups and challenge notes.",
    },
    leetcode: {
        label: "LeetCode 刷題",
        description: "LeetCode solutions and notes.",
    },
    misc: {
        label: "Misc",
        description: "Everything else.",
    },
} as const;

export type CategoryId = keyof typeof CATEGORIES;

/** 文章沒寫 category 時歸到這個分類 */
export const DEFAULT_CATEGORY: CategoryId = "misc";

/** 首頁「最新文章」顯示幾篇 */
export const HOME_POST_COUNT = 5;
