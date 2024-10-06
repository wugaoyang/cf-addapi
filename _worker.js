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
        return new Response(
            '45.194.53.13#自选官方优选US 22.29MB/s\n'+
            '104.18.74.18#自选官方优选US 37.52MB/s\n'+
            '104.17.191.82#自选官方优选US 37.43MB/s\n'+
            
            '172.64.167.8#自选官方优选US 28.57MB/s\n' +
            '172.64.141.79#自选官方优选US 26.65MB/s\n' +
            '172.64.194.184#自选官方优选US 24.31MB/s\n' +
            '172.64.136.145#自选官方优选US 23.38MB/s\n' +
            '172.64.163.100#自选官方优选US 22.09MB/s\n' +
            '172.64.196.188#自选官方优选US 14.91MB/s\n' +
            '172.64.207.249#自选官方优选US 14.58MB/s\n' +
            '172.64.199.107#自选官方优选US 13.07MB/s\n' +
            '172.64.110.253#自选官方优选US 12.17MB/s\n' +
            '172.64.133.59#自选官方优选US 10.55MB/s');
    },
};
