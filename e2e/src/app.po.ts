import { browser, by, element } from 'protractor';

export class AppPage {
  test = browser.baseUrl + '/test';
  navigateTo() {
    return browser.get(this.test) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  setInputText() {
    return element(by.css('#testinput')).sendKeys('please bhagwan hijo dekhi agreko melaidinu');
  }
}
