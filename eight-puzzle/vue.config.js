module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/8-puzzle/'
    : '/'
}
