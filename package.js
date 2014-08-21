Package.describe({
  summary: "Velocity.js jQuery animation plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery.velocity.js', 'client');
  api.add_files('lib/velocity.ui.js', 'client');
});
