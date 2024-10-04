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
        return new Response('104.19.16.14:443#自选官方优选\n' +
            '172.64.143.65:443#自选官方优选\n' +
            '172.64.168.12:443#自选官方优选\n' +
            '172.64.105.20:443#自选官方优选\n' +
            '172.64.129.123:443#自选官方优选\n' +
            '172.64.137.104:443#自选官方优选\n' +
            '104.18.55.210:443#自选官方优选\n' +
            '172.64.207.220:443#自选官方优选\n' +
            '172.64.169.192:443#自选官方优选\n' +
            '172.64.163.223:443#自选官方优选\n');
    },
};