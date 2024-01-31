# ⚙️ @junsiklee/vscode-sqlite3

# Installing

You can use [`npm`](https://github.com/npm/cli) or [`yarn`](https://github.com/yarnpkg/yarn) to install `@junsiklee/vscode-sqlite3`:

* (recommended) Latest published package:
```bash
npm install @junsiklee/vscode-sqlite3
# or
yarn add @junsiklee/vscode-sqlite3
```

Add a string to the .vscodeignore file inside the vscode extension project

```bash
!node_modules/@junsiklee/vscode-sqlite3/**/**/**
```

Example code

```javascript
const sqlite3 = require('@junsiklee/vscode-sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
	db.run('CREATE TABLE lorem (info TEXT)');

	const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
	for (let i = 0; i < 10; i++) {
		stmt.run('Ipsum ' + i);
	}
	stmt.finalize();

	db.each('SELECT rowid AS id, info FROM lorem', (err: any, row: any) => {
		console.log(row.id + ': ' + row.info);
	});
});

db.close();
```

# Reference
[⚙️ node-sqlite3](https://github.com/TryGhost/node-sqlite3)