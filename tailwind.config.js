/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './**/*.tsx',
        './*.tsx',
        './public/**/*.js'
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}

