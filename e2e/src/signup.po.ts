import { browser, by, element } from 'protractor';

export class SignupPage {
  test = browser.baseUrl + '/signup';
  navigateTo() {
    return browser.get(this.test) as Promise<any>;
  }

  

  setUsername() {
    return element(by.css('#username')).sendKeys('amrit@123gmail.com');
  }

  setPassword(){
    return element(by.css('#password')).sendKeys('abcd');
  }

  clickLogin(){
    return element(by.css('#btn-login')).click();
  }
} 
