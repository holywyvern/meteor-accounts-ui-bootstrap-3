Package.describe({
	name: 'daoli:accounts-ui-bootstrap-3',
	summary: 'Bootstrap-styled accounts-ui with TAPi18n multi-language support.',
	version: '1.2.74_1',
	git: "https://github.com/daoli/meteor-accounts-ui-bootstrap-3"
});

Package.on_use(function (api) {
	api.use(['session@1.0.0',
		'spacebars@1.0.0',
		'stylus@2.511.0',
		'accounts-base@1.0.0',
		'underscore@1.0.0',
		'templating@1.0.0'
	],'client');

	api.use(["tap:i18n@1.5.0"], ["client", "server"]);

	api.imply('accounts-base', ['client', 'server']);

	// Allows the user of this package to choose their own Bootstrap
	// implementation.
	api.use(['twbs:bootstrap@3.3.1', 'nemo64:bootstrap@3.3.1_1'], 'client', {weak: true});
	// Allows us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth@1.0.0', {weak: true});
	// Allows us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password@1.0.0', {weak: true});

	api.add_files('accountsUIBootstrap3.js', 'client');
	api.add_files("package-tap.i18n", ["client", "server"]);

	api.add_files([
		'login_buttons.html',
		'login_buttons_single.html',
		'login_buttons_dropdown.html',
		'login_buttons_dialogs.html',
	], 'client');

	api.add_files([
		'accounts_ui.js',
		'login_buttons_session.js',
		'login_buttons.js',
		'login_buttons_single.js',
		'login_buttons_dropdown.js',
		'login_buttons_dialogs.js',
		'accounts_ui.styl'
	], 'client');

	api.add_files([
		// translations
		'i18n/en.i18n.json',
		'i18n/de.i18n.json',
		'i18n/fr.i18n.json',
		'i18n/zh-CN.i18n.json',
	], ["client", "server"]);

	api.export('accountsUIBootstrap3', "client");
})
