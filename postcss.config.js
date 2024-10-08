// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const purgecss = require(`@fullhuman/postcss-purgecss`)({
    // Specify the paths to all of the template files in your project.
    content: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    defaultExtractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(innerMatches)
    },
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).-move$/, /^router-link(|-exact)-active$/],
});
module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
    ],
};