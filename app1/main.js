export const bootstrap = () => {
    console.log('bootstrap');
    return Promise.resolve();
};
export const mount = () => {
    console.log('mount');
    return Promise.resolve().then(() => {
        // 原生
        const elementDom = documtent.createElement('div');
        elementDom.innterHTML = 'Hello word';
        document.querySelector('#app').append(elementDom);
        // single-spa-react实现single-spa和react的整合
        // single-spa-vue实现single-spa和vue的整合
    });
};
export const unmount = () => {
    console.log('unmount');
    return Promise.resolve();
};
