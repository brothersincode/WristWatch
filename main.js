var menubar = require('menubar'); // https://github.com/maxogden/menubar

var mb = menubar({
  'icon': './IconTemplate.png',
  'width': 400,
  'height': 420,
  'window-position': 'bottomRight'
});

// mb.on('ready', function ready () {
//   console.log('app is ready');
//   // your app code here
//   // this.window.loadURL();
// });

mb.on('after-create-window', function () {
  mb.window.loadURL('http://taghvim.info/?embed=1');
});
