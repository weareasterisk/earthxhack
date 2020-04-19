const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  modules: true,
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')(),
    require('postcss-url'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      features: {
          'nesting-rules': true
      },
      browsers: [
          '> 1%',
          'last 2 versions',
          'Firefox ESR',
      ]
    }),

    isProd 
    ? cssnano({preset: 'default'}) 
    : null,

    isProd
    ? purgecss({
      content: ['./public/**/*.html', './src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:%.]+(?<!:)/g) || []
    }) : null
  ],
};