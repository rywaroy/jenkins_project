const Koa = require('koa');
// const proxy = require('koa2-proxy-middleware'); //引入代理模块
const koaBody = require('koa-body');

const app = new Koa();
// const options = {
//     targets: {
//         '/sync/(.*)': {
//             // target: 'http://10.194.106.206:32024',
//             target: 'http://video-service-sync.ai.svc.cluster.local:8501',
//             changeOrigin: true,
//         },
//         '/(.*)': {
//             // target: 'http://console-test.ai.njdiip.com',
//             target: 'http://ai-console-lb.ai.svc.cluster.local:8501',
//             changeOrigin: true,
//         },
//     }
// }
// const bodyparser = require('koa-bodyparser')
app.use(require('koa-static')(__dirname + '/dist'));
// app.use(proxy(options));
app.use(koaBody({multipart: true}));

const port = 8080
app.listen(port);

console.log(`listening on port ${port}`);