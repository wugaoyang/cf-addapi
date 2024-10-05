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
        return new Response('172.64.167.8#自选官方优选28.57MB/s\n' +
            '172.64.141.79#自选官方优选26.65MB/s\n' +
            '172.64.194.184#自选官方优选24.31MB/s\n' +
            '172.64.136.145#自选官方优选23.38MB/s\n' +
            '172.64.163.100#自选官方优选22.09MB/s\n' +
            '172.64.196.188#自选官方优选14.91MB/s\n' +
            '172.64.207.249#自选官方优选14.58MB/s\n' +
            '172.64.199.107#自选官方优选13.07MB/s\n' +
            '172.64.110.253#自选官方优选12.17MB/s\n' +
            '172.64.133.59#自选官方优选10.55MB/s');
    },
};