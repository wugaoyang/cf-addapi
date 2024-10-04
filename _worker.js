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
        return new Response('104.18.53.181#自选\n' +
            '104.19.255.252#自选\n' +
            '141.101.122.239#自选\n' +
            '104.19.15.138#自选\n' +
            '172.64.111.94#自选\n' +
            '141.101.123.249#自选\n');
    },
};