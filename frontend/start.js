const { loadNuxt } = require('nuxt-start')

async function start () {
  const nuxt = await loadNuxt('start')
  await nuxt.listen(57946, "127.0.6.68")
}

start()
