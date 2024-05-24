/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        extend: {
            fontSize: {
                xs: "0.75rem", // Existing size for reference
                sm: "0.875rem", // Existing size for reference
                tiny: "0.875rem", // Custom size
                base: "1rem", // Existing size for reference
                lg: "1.125rem", // Existing size for reference
                xl: "1.25rem", // Existing size for reference
                "2xl": "1.5rem", // Existing size for reference
                "3xl": "1.875rem", // Existing size for reference
                "4xl": "2.25rem", // Existing size for reference
                "5xl": "3rem", // Existing size for reference
                "6xl": "4rem", // Existing size for reference
                "7xl": "5rem", // Custom size
                "10xl": "10rem", // Custom size
                huge: "6rem", // Custom size
                xtraHuge: "12rem",
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
