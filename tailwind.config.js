/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0e1a25",
                },
                secondary: {
                    DEFAULT: "#f5ce2e",
                },
            },
            backgroundImage: {
                "about-mission-desktop":
                    "url('https://anymindgroup.com/wp-content/themes/anymind/img/about/content_mission.png')",
                "about-mission-mobile":
                    "url('https://anymindgroup.com/wp-content/themes/anymind/img/about/content_mission_sp.png')",
                "about-purpose":
                    "url('https://anymindgroup.com/wp-content/themes/anymind/img/about/bg_about_porpose.jpg')",
            },
        },
    },
    plugins: [],
};
