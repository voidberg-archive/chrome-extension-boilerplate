/**
 * @file Chrome Extension Boilerplate
 * @name Example
 *
 * Extension reload code.
 *
 * @author Alexandru Badiu <andu@ctrlz.ro>
 */

(function() {
  var last_timestamp, reload_interval;

  last_timestamp = null;

  reload_interval = function() {
    var xhr;
    xhr = new XMLHttpRequest;
    xhr.open('GET', 'reload.html');
    xhr.send(null);
    return xhr.onload = function() {
      if (last_timestamp !== xhr.responseText) {
        console.log('reloading');
        last_timestamp = xhr.responseText;
        return chrome.runtime.reload();
      }
    };
  };

  (function() {
    var xhr;
    xhr = new XMLHttpRequest;
    xhr.open('GET', 'reload.html');
    xhr.send(null);
    return xhr.onload = function() {
      last_timestamp = xhr.responseText;
      return setInterval(reload_interval, 1000);
    };
  })();

}).call(this);
