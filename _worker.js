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
            '104.17.74.165#自选官方优选US 23.16MB/s\n' +
            '141.101.120.87#自选官方优选US 22.99MB/s\n' +
            '104.16.223.60#自选官方优选US 11.67MB/s\n' +
            '104.16.217.57#自选官方优选US 10.89MB/s\n' +
            '141.101.122.215#自选官方优选US 9.97MB/s\n');
    },
};
