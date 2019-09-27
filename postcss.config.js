module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      preserve: false,
      importFrom: './src/common/theme.css'
    })
  ]
};
