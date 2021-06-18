const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const NodeOutputFileSystem = require('webpack/lib/node/NodeOutputFileSystem');

const webpackConfig = require('./webpack.config');

const { PORT = 3000 } = process.env;
const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    fs: new NodeOutputFileSystem(),
    serverSideRender: true,
  })
);

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', async (req, res) => {
  const event = {
    Records: [
      {
        cf: {
          request: {
            uri: req.path,
          },
        },
      },
    ],
  };

  const page = req.path.split('/')[2];
  const lambda = page ? 'instagram-' + page : 'default-lambda';
  const { handler } = require(`./build/${lambda}/index.js`);
  const response = await handler(event);

  res.send(response.body);
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});
