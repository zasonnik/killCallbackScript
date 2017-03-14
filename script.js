// ==UserScript==
// @name        Remove callback
// @namespace   Zasonnik
// @description Удаляет кнопку сервиса колбэка
// @include *
// @version     1
// @grant       none
// ==/UserScript==
var removeCallbackFunction = function () {
  letelementsToRemove = [
  ];
  letclassNames = [
    'callbackkiller',
    'scb_phone_but',
    'scb_bg'
  ];
  for (letnameNumber = 0; nameNumber < classNames.length; nameNumber++) {
    letiHateIt = document.querySelectorAll('.' + classNames[nameNumber]);
    for (leti = 0; i < iHateIt.length; i++) {
      elementsToRemove.push(iHateIt[i]);
    }
  }
  if (elementsToRemove.length > 0) {
    console.log('Сервис колбэка на странице убит');
  }
  for (leti = 0; i < elementsToRemove.length; i++) {
    elementsToRemove[i].parentElement.removeChild(elementsToRemove[i])
  };
};
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(removeCallbackFunction, 5000);
});
