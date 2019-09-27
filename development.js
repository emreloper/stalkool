const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const requireFromString = require('require-from-string');

const webpackConfig = require('./webpack.config');

const { PORT = 3000 } = process.env;
const app = express();
const compiler = webpack(webpackConfig);

const fixtures = {
  home: {},
  profile: require('./src/profile/Profile.fixture.json').graphql,
  post: require('./src/post/Post.fixture.json').data
};

app.use(webpackDevMiddleware(compiler, { serverSideRender: true }));

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', (req, res) => {
  const fs = res.locals.fs;
  const page = req.path.split('/')[2] || 'home';
  const outputPath = res.locals.webpackStats.toJson().outputPath;
  const assets = res.locals.webpackStats.toJson().assetsByChunkName[page];

  const cssFile = assets.find(path => path.endsWith('.css'));
  const jsFile = assets.find(path => path.endsWith('.js'));

  const css = fs.readFileSync(outputPath + '/' + cssFile, 'utf8');
  const render = requireFromString(
    fs.readFileSync(outputPath + '/' + jsFile, 'utf8')
  ).default;

  res.send(render(css, fixtures[page]));
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});
