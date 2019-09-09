const config = {
    env: process.env.NODE_ENV,
    // 'port': '3000',
    // 'secret': 'supersecret'
    devMode:
        {
        'secret': 'supersecret',
        'port' : '3000',
        'domain':'http://localhost:'
        },

    prodMode:
        {
        'secret': 'supersecret',
        'port' : '3000',
        'domain':'http://3.16.213.85'
        //'domain':'http://18.222.255.120:',
        }
}

module.exports = config[config.env];
