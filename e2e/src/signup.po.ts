import { browser, by, element } from 'protractor';

export class SignupPage {
  test = browser.baseUrl + 'signup';
  navigateTo() {
    return browser.get(this.test) as Promise<any>;
  }

  setName() {
    return element(by.css('#name')).sendKeys('amrit shrestha');
  }

  setUsername() {
    return element(by.css('#username')).sendKeys('amrit');
  }

  setEmail() {
    return element(by.css('#email')).sendKeys('amrit@123gmail.com');
  }

  setPhone() {
    return element(by.css('#phone')).sendKeys('9813605819');
  }

  setLocation() {
    return element(by.css('#location')).sendKeys('Kathmandu');
  }


  setPassword(){
    return element(by.css('#password')).sendKeys('abcd');
  }

  clickLogin(){
    return element(by.css('#btn-signup')).click();
  }
} 
