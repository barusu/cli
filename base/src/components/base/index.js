import message from './message.js';
import oSvg from './svg';

const install = function(Vue) {
  Vue.prototype.$msg = message;
  Vue.component('oSvg', oSvg);
};

export default {
  install
};