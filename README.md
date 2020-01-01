# download-package-source

Download the source code of a particular version of a package published to npm.

This does _not_ download from npm as not all files might be published there.
Therefore the source might be more useful to you, for example if you want
to run its test suite.

## Usage

```js
const download = require('download-package-source')
const { tmpdir } = require('os')

const dir = `${tmpdir()}/${Date.now()}`
await download('https://github.com/juliangruber/browser-run', '1.0.0', dir)
console.log(dir)
```

```bash
$ node example.js
/var/folders/h2/vg0v3hgn26x5gb4w64yx59zh0000gn/T/1577899257798

$ ls /var/folders/h2/vg0v3hgn26x5gb4w64yx59zh0000gn/T/1577899257798
README.md	example.js	index.js	package.json	test
```

## Sponsors

This project is [sponsored](https://github.com/sponsors/juliangruber) by
[CTO.ai](https://cto.ai/), making it easy for development teams to create and
share workflow automations without leaving the command line.

[![](https://apex-software.imgix.net/github/sponsors/cto.png)](https://cto.ai/)
