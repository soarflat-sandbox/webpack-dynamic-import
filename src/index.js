import 'es6-promise/auto';

function isIE(ua) {
  let m;
  let _ua = (ua || navigator.userAgent).toLowerCase();
  if ((m = _ua.match(/msie (\d+\.\d+);/))) return parseInt(m[1]);
  if (_ua.indexOf('edge') > -1) return 'edge';
  if (_ua.indexOf('trident') > -1) return 11;
  return false;
}

function isChrome() {
  if (/Google Inc/.test(navigator.vendor)) {
    if (navigator.userAgent.indexOf('Chrome') === -1) {
      return false;
    }
    if (typeof window.opr !== 'undefined') {
      return false;
    }
    return true;
  }
  return false;
}

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch(error => 'An error occurred while loading the component');
}

function getModule() {
  return import(/* webpackChunkName: "module" */ './module')
    .then(({ default: module }) => {
      return module;
    })
    .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});

if (parseInt(isIE()) >= 11 || isChrome()) {
  getModule().then(component => {
    component();
  });
}
