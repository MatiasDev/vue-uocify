//const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  pwa: {
    name: 'vue-uocify',
    short_name: "vue-uocify",
    description: "vue-uocify es una aplicación para buscar música en Deezer",
    themeColor: '#73EDFF',
    msTileColor: '#1F1F89',
    appleMobileWebAppCapable: 'yes', 
    appleMobileWebAppStatusBarStyle: '#1F1F89',
    assetsVersion:1.0,
    categories: ["musica", "practicas", "vuejs"],
    start_url: "/",
    display: "standalone",
    iconPaths:{
        favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
        appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    }
  }
};