/**
 * ====================================================================
 *                 NHAT TAM BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Professional English Configuration & Elite Bio Information
 */

const CONFIG = {
    // 1. DISCORD USER ID (Snowflake for realtime presence):
    discordId: "1482401019257290793",

    // 2. THÔNG TIN PROFILE (PROFESSIONAL ENGLISH):
    profile: {
        name: "Nhat Tam",
        username: "darakz.xyz",
        title: "Free Fire Cheats & Bypass Engineer • Multi-Platform Digital Services • F8 Legendary",
        avatar: "1788525343888_442268652742412938_442268652742412938_4117fb47a2e90ab4a11b209a14c08ec6.jpg",
        banner: "profile_banner.jpg",
        bio: "Specializing in elite Free Fire modding, memory bypasses, and high-performance cheat architectures. Delivering full-spectrum digital solutions, social media boosting, and premium automated services. Dedicated to flawless execution, game modification engineering, and reliable digital systems.",
        location: "Vietnam",
        quotes: [
            "Engineering elite Free Fire cheats, memory bypasses & mod menus.",
            "Providing full-spectrum social media growth & digital services.",
            "Bypassing anticheat constraints, optimizing game performance.",
            "Delivering premium automated solutions and reliable digital craft."
        ],
        badges: [
            { icon: "fa-solid fa-crosshairs", label: "FF Cheat Dev", color: "#ffffff" },
            { icon: "fa-solid fa-shield-virus", label: "Memory Bypass", color: "#e0e0e0" },
            { icon: "fa-solid fa-bolt", label: "Digital Services", color: "#ffffff" },
            { icon: "fa-solid fa-hashtag", label: "Social Media Growth", color: "#d1d5db" },
            { icon: "fa-solid fa-code", label: "Reverse Engineer", color: "#a1a1aa" },
            { icon: "fa-solid fa-crown", label: "F8 Owner", color: "#ffffff" }
        ]
    },

    // 3. DANH SÁCH 2 DISCORD SERVER (Ảnh Avatar & Banner thật 100% từ Discord):
    servers: [
        {
            name: "F8 Legendary",
            role: "Free Fire Cheats • All Social Media & Digital Services",
            description: "Premier engineering hub specializing in elite Free Fire cheats, memory bypasses, and game modding. Providing full-spectrum social media growth, premium digital services, and custom technical solutions.",
            inviteUrl: "https://discord.gg/f8legendary",
            icon: "f8_icon.png",
            banner: "f8_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1538307697076736084/795017a2c2c5c0826c41bfb23ef8643e.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1538307697076736084/6a27ba5864b94854c07f0e6d42578a81.png?size=1024",
            members: "710 Members",
            online: "181 Online",
            tag: "OFFICIAL HUB",
            featured: true
        },
        {
            name: "GTA5F8 ( Chiếm Đóng )",
            role: "F8 Gang & Dev Sanctuary",
            description: "Official GTA5F8 community — Nơi Những Huyền Thoại Được Tạo Nên Trên Chiến Trường. Exclusive projects & networking.",
            inviteUrl: "https://discord.gg/CEGqygrhsw",
            icon: "gta_icon.png",
            banner: "gta_banner.png",
            cdnIcon: "https://cdn.discordapp.com/icons/1331250454520139797/26fd1402640c50b5ef8e34d5605d93ff.png?size=256",
            cdnBanner: "https://cdn.discordapp.com/banners/1331250454520139797/154cf34e99b180d1cd8ae3089047a89e.png?size=1024",
            members: "214 Members",
            online: "51 Online",
            tag: "F8G5",
            featured: false
        }
    ],

    // 4. MẠNG XÃ HỘI / LIÊN HỆ (DIRECT CONNECTIONS):
    socials: [
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/kenpcphilets-rgb" },
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/nhatam.029/" },
        { name: "Telegram", icon: "fa-brands fa-telegram", url: "https://t.me/kenpcphilets" },
        { name: "Steam", icon: "fa-brands fa-steam", url: "https://steamcommunity.com/profiles/76561199524577128/" }
    ],

    // 5. NHẠC NỀN & PLAYLIST (AUDIO PLAYLIST):
    music: {
        autoplayOnEnter: true,
        volume: 0.4,
        playlist: [
            {
                title: "Lofi Chill",
                artist: "Chill Beats • Sanctuary",
                url: "lofichill.mp3"
            },
            {
                title: "Em Không Cần",
                artist: "Hannie • Lofi Chill",
                url: "emkhongcan.mp3"
            }
        ],
        // Default / Initial Track Fallback
        title: "Lofi Chill",
        artist: "Chill Beats • Sanctuary",
        url: "lofichill.mp3"
    },

    // 6. HIỆU ỨNG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    }
};
