const path = require('path')

module.exports = {
    webpack: config => {
        config.resolve.modules.push(path.resolve('./'))

        return config
    },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    
  },
}