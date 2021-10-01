const path = require('path');
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
                @import "@/assets/scss/core/_mixins.scss";
                @import "@/assets/scss/core/_vars.scss";
                @import "@/assets/scss/core/_mixins.scss";
                @import "@/assets/scss/core/_fonts.scss";
            `,
      },
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
};
