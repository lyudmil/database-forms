Package.describe({
	summary: "Easy form generation for creating and editing database records."
});

Package.on_use(function(api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/jsonform/jsv.js',
		'lib/jsonform/jsonform.js',
		'lib/regex_filter/regex_filter.js',
		'lib/class.js',
		'lib/database_form.js',
		'lib/form_model.js'
	], 'client');
});