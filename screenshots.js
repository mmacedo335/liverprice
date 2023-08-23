const captureWebsite = require('../cadastros/node_modules/capture-website');

const options = {
  fullPage: true,
  overwrite: true,
  timeout: 25,
  delay: 10,
  scaleFactor: 1,
  disableAnimations: true,
  hideElements: ['#component-popup-newsletter-root'],
  preloadFunction: 'setTimeout(() => lazyLoadInstance.loadAll(), 2000)',
  launchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};

const storeUrl = 'https://template6.vnda.dev/';

const items = [
  [storeUrl, '01-geral'],
  [storeUrl, '02-home'],
  [storeUrl + 'produtos', '03-tag'],
  [storeUrl + 'produto/titulo-do-produto-49', '04-produto'],
  [storeUrl + 'p/sobre', '05-sobre'],
  [storeUrl + 'p/contato', '06-contato'],
  [storeUrl + 'p/faq', '07-faq'],
  [storeUrl + 'p/onde-encontrar', '08-onde-encontrar'],
  [storeUrl + 'p/pagina-padrao', '09-pagina-padrao'],
];

(async () => {
  await Promise.all(
    items.map(([url, filename]) => {
      return captureWebsite.file(
        url,
        `./assets/images/prints/${filename}.png`,
        options
      );
    })
  );
})();
