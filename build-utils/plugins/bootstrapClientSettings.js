/* example plugin, likely fairly naive */
module.exports = class BootstrapClientSettingsPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap('BootstrapClientSettingsPlugin', () => {
      console.log('=================') // eslint-disable-line
      console.log('= add bootstrap data for local dev =') // eslint-disable-line

      // fetch client settings
      // intepolate into index.html as per SSR
      // fix client app such that page data not required and fetch on initial render when running locally.
    })
  }
}
