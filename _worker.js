/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
    async fetch(request, env, ctx) {
        return new Response('104.17.74.165#自选官方优选23.16MB/s\n' +
            '141.101.120.87#自选官方优选22.99MB/s\n' +
            '104.16.223.60#自选官方优选11.67MB/s\n' +
            '104.16.217.57#自选官方优选10.89MB/s\n' +
            '141.101.122.215#自选官方优选9.97MB/s\n' +
            '104.16.218.26#自选官方优选8.16MB/s\n' +
            '104.16.45.2#自选官方优选8.01MB/s\n' +
            '104.17.73.149#自选官方优选6.8MB/s\n' +
            '104.21.45.215#自选官方优选6.22MB/s\n' +
            '104.16.215.19#自选官方优选5.09MB/s\n');
    },
};