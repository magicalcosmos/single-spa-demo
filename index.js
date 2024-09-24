// 微前端基座入口

// 确定入口和确定子应用
import { registerApplication, start } from 'single-spa';
import { bootstrap as bootstrap1, mount as mount1, unmount as unmount1} from './app1/main.js';
import { bootstrap as bootstrap2, mount as mount2, unmount as unmount2} from './app2/main.js';

// 第一个子应用
// 应用配置
// 1. 名称
// 2. 入口（接入协议）
// 3. 激活规则（路径匹配）, 路由逻辑
registerApplication({
    name: 'app1',
    app: {
        bootstrap: bootstrap1,
        mount: mount1,
        unmount: unmount1
    },
    activeWhen: ['/app1'],
});

// 第二个子应用
// 应用配置
registerApplication({
    name: 'app2',
    app: {
        bootstrap: bootstrap2,
        mount: mount2,
        unmount: unmount2
    },
    activeWhen: ['/app2'],
});

// 启动微前端基座
start()
