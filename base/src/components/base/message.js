import Vue from 'vue';
import MessageContent from './message.vue';

var MessageConstructor = Vue.extend(MessageContent);
var poi = 1;
var instance;
var instances = [];

const Message = function(option) {
  option = option || {};
  if (typeof option === 'string') {
    option = {
      message: option
    };
  }
  var closeCallBack = option.closed;
  var id = 'message_' + poi++;
  option.closed = function() {
    Message.close(id, closeCallBack);
  };
  instance = new MessageConstructor({
    data: option
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = option => {
    if (typeof option === 'string') {
      option = {
        message: option
      };
    }
    option.type = type;
    return Message(option);
  };
});

Message.close = function(id, closeCallBack) {
  for (var i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof closeCallBack === 'function') {
        closeCallBack(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function() {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;