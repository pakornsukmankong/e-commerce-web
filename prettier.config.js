// prettier.config.js
module.exports = {
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    jsxSingleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    overrides: [
      {
        files: '*.js',
        options: {
          parser: 'babel',
        },
      },
    ],
  };