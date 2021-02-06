const path = require('path')

module.exports = {
    webpack: config => {
        config.resolve.modules.push(path.resolve('./'))

        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    assetPrefix: 'https://github.com/hgoguma/test.github.io'
}