import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('tailwindcss/stubs/simpleConfig.stub');

try {
    file = require('../../../tailwind.config');
} catch (e) {
    console.warn('Could not find custom tailwind config, using simple config');
}

const {theme} = resolveConfig(file);

module.exports = theme;
