// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const NAME = 'Hannes Taljaard';
export const SITE_TITLE = 'Hannes Taljaard | Composer, Pianist, Singer, Movement Artist';
export const SITE_DESCRIPTION = 'Official Website';
export const HOMEPAGE_URL = 'https://www.hannestaljaard.com';

// Available navigation or pages for the header navigation
export const SITE_NAVIGATION = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'about',
        href: '/about'
    },
    {
        name: 'compositions',
        href: '/compositions'
    },
    {
        name: 'performances',
        href: '/performances'
    },
    {
        name: 'projects',
        href: '/projects'
    },
    {
        name: 'information',
        href: '/information',
        submenu: [
            {
                name: 'biography',
                href: '/biography'
            },
            {
                name: 'photos',
                href: '/photos'
            },
            {
                name: 'scholarly',
                href: '/scholarly'
            },
            {
                name: 'my thoughts',
                href: '/my-thoughts'
            },
            {
                name: 'recordings',
                href: '/recordings'
            }
        ]
    },
    {
        name: 'contact',
        href: '/contact'
    },
]

// Available navigation or pages for the information navigation
// export const INFORMATION_NAVIGATION = [
//     {
//         name: 'biography',
//         href: '/biography'
//     },
//     {
//         name: 'photos',
//         href: '/photos'
//     },
//     {
//         name: 'scholarly',
//         href: '/scholarly'
//     },
//     {
//         name: 'my thoughts',
//         href: '/mythoughts'
//     },
//     {
//         name: 'recordings',
//         href: '/recordings'
//     }
// ]

// Browse here: https://icon-sets.iconify.design/
export const FOOTER_SOCIALS = [
    {
        name: 'YouTube',
        url: 'https://youtube.com/@damjanprvulovic',
        icon: "mdi:youtube",
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/damjanprvulovic/',
        icon: "mdi:instagram",
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@damjanprvulovic',
        icon: "ic:baseline-tiktok",
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/damjan-prvulovic-576637153/',
        icon: "mdi:linkedin",
    },
]

export const COMPOSITION_CATEGORIES_LIST = ['orchestral', 'chamber-music-2-3', 'chamber-music-4', 'choir', 'vocal', 'solo-instrumental'];