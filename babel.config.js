// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: '16.16.0',
                },
            },
        ],
    ],
};