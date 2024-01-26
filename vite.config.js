// vite.config.js
export default {
  base: '/didlydoo-app/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Page d\'accueil',
    },
    secondPage: {
      entry: 'src/mainEvent.js',
      template: 'public/event.html',
      title: 'Deuxième Page',
    },
  },
};
