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
        },
    },
    plugins: [],
};
