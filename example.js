const download = require('.')
const { tmpdir } = require('os')

const example = async () => {
  const dir = `${tmpdir()}/${Date.now()}`
  await download('https://github.com/juliangruber/browser-run', '1.0.0', dir)
  console.log(dir)
}

example().catch(err => {
  console.error(err)
  process.exit(1)
})
