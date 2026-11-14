/**
 * 個人資料與連結設定 —— 首頁左側的資料卡會讀這裡。
 * 標 TODO 的地方換成你自己的資料。
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
    // TODO: 一兩句自我介紹
    bio: "CS student. Interesting in software / game development and security research",
    avatar: "/eous.jpg",
    links: [
        { label: "GitHub", href: "https://github.com/usak1i", icon: "github" },
        { label: "Discord", href: "https://discord.com/users/520770300024061972", icon: "discord" },
        { label: "Instagram", href: "https://www.instagram.com/_han._.ch/", icon: "instagram" },
    ] satisfies ProfileLink[],
};

/** 首頁「最新文章」顯示幾篇 */
export const HOME_POST_COUNT = 5;
