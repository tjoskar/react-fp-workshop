const path = require('path')
const express = require('express')
const fallback = require('express-history-api-fallback')
const { FuseBox } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js'
})

fuse
  .bundle('app')
  .sourceMaps(true)
  .target('browser')
  .instructions(`>boot.ts`)
  .watch()

fuse.dev(
  {
    port: 8080,
    root: '.'
  },
  server => {
    const root = path.resolve('.')
    server.httpServer.app.use(express.static(root))
    server.httpServer.app.use(fallback('index.html', { root }))
  }
)

fuse.run()
