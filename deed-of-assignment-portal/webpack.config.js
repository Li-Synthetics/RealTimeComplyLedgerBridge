module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-class-properties',
              '@babel/plugin-transform-nullish-coalescing-operator',
              '@babel/plugin-transform-numeric-separator',
              '@babel/plugin-transform-optional-chaining',
              '@babel/plugin-transform-private-methods',
              '@babel/plugin-transform-private-property-in-object'
            ]
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-class-properties'
            ]
          }
        }
      },
      // other rules
    ]
  }
}
