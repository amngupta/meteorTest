Package.describe({
  name: 'index',
  version: '0.0.1',
  git: '',
  documentation: 'README.md'
});

Package.onUse((api)=> {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating'); 
  api.use('iron:router');
  api.use('http');
  // api.use('tap:i18n@1.8.0');
  api.use('reactive-var','client');
//For images
//api.addAssets([]);
  api.addFiles(['Router.js']);


// For files
  api.addFiles(['client/index.html','client/index.js'], 'client');
  api.addFiles(['server/server.js'], 'server');

});
