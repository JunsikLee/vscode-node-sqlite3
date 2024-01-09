//module.exports = require('bindings')('node_sqlite3.node');

if(process.platform === 'win32')
{
	const path = require('path');
	const module_path = path.resolve(__dirname, '../node_modules/@junsiklee/vscode-sqlite3/')

	module.exports = require('bindings')({
		bindings: 'node_sqlite3.node',
		module_root: module_path,
	});
}
else
{
	module.exports = require('bindings')('node_sqlite3.node');
}


