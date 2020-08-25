const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    purge: [
        './src/**/*.vue',
    ],
    theme: {
        fill: {
            current: '#39b54a',
        },
        opacity: {
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '10': '.1',
            '20': '.2',
            '30': '.3',
            '40': '.4',
            '50': '.5',
            '60': '.6',
            '70': '.7',
            '80': '.8',
            '90': '.9',
            '100': '1',
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                banana: "#39b54a",
                accentDarker: "#257530",
                accentLight: "#6aff7e"
            }
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui'), ],
};