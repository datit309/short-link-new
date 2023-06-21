module.exports = {
    apps: [
        {
            name: 'FE-NuxtJS',
            // exec_mode: 'cluster',
            // instances: 'max',
            watch: false,
            autorestart: true,
            script: './.output/server/index.mjs'
        }
    ]
}
