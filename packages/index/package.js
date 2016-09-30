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
  // api.use('tap:i18n@1.8.0');
  api.use('reactive-var','client');
//For images
//api.addAssets([]);


// For files
  api.addFiles(['index.html','index.js'], 'client');
  api.addFiles(['Router.js'], 'client');
});
