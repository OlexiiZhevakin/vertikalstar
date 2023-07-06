const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app: any) {
  app.use(
    '/blogData.json',
    createProxyMiddleware({
      target: 'https://www.vertikalstar.com',
      changeOrigin: true,
    })
  );
};
