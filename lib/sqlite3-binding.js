//module.exports = require('bindings')('node_sqlite3.node');

const path = require('path');
const os = require('os');
let bindings_options = 'node_sqlite3.node';

if(process.versions.electron && process.platform === 'win32')
{
	const module_path = path.resolve(__dirname).includes(path.normalize("@junsiklee\\vscode-sqlite3"))
    ? path.resolve(__dirname, path.normalize("..\\build_node\\"))
    : path.resolve(__dirname, path.normalize("..\\node_modules\\@junsiklee\\vscode-sqlite3\\build_node\\"));

	bindings_options = {
		bindings: 'node_sqlite3_win32_x64.node',
		module_root: module_path,
	};
}
else if(process.versions.electron && process.platform === 'darwin')
{
	const module_path = path.resolve(__dirname).includes(path.normalize("@junsiklee/vscode-sqlite3"))
    ? path.resolve(__dirname, path.normalize("../build_node/"))
    : path.resolve(__dirname, path.normalize("../node_modules/@junsiklee/vscode-sqlite3/build_node/"));

	bindings_options = {
		bindings: (os.arch()==='x64')?'node_sqlite3_drawin_x64.node':'node_sqlite3_drawin_arm64.node',
		module_root: module_path,
	};
}
else if(process.versions.electron && process.platform === 'linux')
{
	const module_path = path.resolve(__dirname).includes(path.normalize("@junsiklee/vscode-sqlite3"))
    ? path.resolve(__dirname, path.normalize("../build_node/"))
    : path.resolve(__dirname, path.normalize("../node_modules/@junsiklee/vscode-sqlite3/build_node/"));

	bindings_options = {
		bindings: 'node_sqlite3_linux_x64.node',
		module_root: module_path,
	};
}

module.exports = require('bindings')(bindings_options);