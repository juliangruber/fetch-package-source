'use strict'

const fetch = require('node-fetch')
const githubUrlToObject = require('github-url-to-object')
const { promises: fs } = require('fs')
const { exec } = require('child_process')
const { promisify } = require('util')

const download = async (url, version, dir) => {
  const obj = githubUrlToObject(url)
  let res = await fetch(
    `https://github.com/${obj.user}/${obj.repo}/archive/${version}.tar.gz`
  )
  if (!res.ok) {
    res = await fetch(
      `https://github.com/${obj.user}/${obj.repo}/archive/v${version}.tar.gz`
    )
  }
  if (!res.ok) {
    throw new Error('No matching GitHub release found')
  }
  try {
    await fs.mkdir(dir)
  } catch (_) {}
  await fs.writeFile(`${dir}/tgz`, await res.buffer())
  await promisify(exec)('tar -xzf tgz --strip=1', { cwd: dir })
  await fs.unlink(`${dir}/tgz`)
}

module.exports = download
