import $ from 'flyio';

const host = '';

$.config.timeout = 10000;
$.config.baseURL = host;

function error(err) {
  return false;
}
/* eslint-disable no-unused-vars */
var ajax = {
  get(url, data, callback) {
    if(Object.prototype.toString.call(data) === '[object Function]') {
      callback = data;
      data = {};
    }
    $.get(url, data).then(rs => {
      var data;
      try {
        data = JSON.parse(rs.data);
      }catch(e) {
        data = rs.data;
      }
      callback(data);
    }).catch(err => {
      callback(error(err));
    });
  },
  post(url, data, callback) {
    if(Object.prototype.toString.call(data) === '[object Function]') {
      callback = data;
      data = {};
    }
    var Data = new FormData();
    for(var n in data) {
      Data.append(n, data[n]);
    }
    $.post(url, Data).then(rs => {
      var data;
      try {
        data = JSON.parse(rs.data);
      }catch(e) {
        data = rs.data;
      }
      callback(data);
    }).catch(err => {
      callback(error(err));
    });
  }
};

export default ajax;