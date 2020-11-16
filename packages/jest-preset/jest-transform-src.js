const babelJest = require('babel-jest')
const { createHash } = require('crypto')

const transformer = babelJest.createTransformer()

const TRANSFORMED_FILES = new Set()
const CACHE_KEYS = new Map()

module.exports = {
  ...transformer,
  getCacheKey(fileData, filename, configString, cacheKeyOptions) {
    // Simplified cache key for CI - we know configs won't change between runs
    if (process.env.USE_SIMPLIFIED_CACHE) {
      return createHash('md5').update(filename).digest('hex')
    }
    const key = transformer.getCacheKey.call(
      this,
      fileData,
      filename,
      configString,
      cacheKeyOptions,
    )
    if (CACHE_KEYS.has(filename)) {
      console.log(`Got a different cache key for ${filename}`)
      console.log(`Old: ${CACHE_KEYS.get(filename)}`)
      console.log(`New: ${key}`)
    }

    CACHE_KEYS.set(filename, key)
    return key
  },
  process(src, filename, config, transformOptions) {
    if (TRANSFORMED_FILES.has(filename)) {
      console.log(`Reprocessing ${filename}`)
    }
    TRANSFORMED_FILES.add(filename)
    return transformer.process.call(
      this,
      src,
      filename,
      config,
      transformOptions,
    )
  },
}
