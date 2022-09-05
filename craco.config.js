const sassResourcesLoader = require('craco-sass-resources-loader');
const CracoAlias = require('craco-alias');

module.exports = () => ({
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: ['./src/assets/styles/_vars.scss', './src/assets/styles/_mixins.scss'],
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
});
