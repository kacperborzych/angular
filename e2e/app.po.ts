import { browser, by, element } from 'protractor';

export class KacperbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kb-root h1')).getText();
  }
}
