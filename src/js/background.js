/**
 * @file Chrome Extension Boilerplate
 * @name Example
 *
 * Extension background code.
 *
 * @author Alexandru Badiu <andu@ctrlz.ro>
 */

'use strict';

class ExtensionBackground {

  constructor() {
    this.events();
  }

  events() {
    /** Icon click handler */
    chrome.browserAction.onClicked.addListener((tab) => {
      alert('It is working!');
    });
  }
}

new ExtensionBackground();
