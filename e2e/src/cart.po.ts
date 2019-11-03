import { browser, by, element } from 'protractor';

export class CartPage {
  test = browser.baseUrl + '/cart';
  navigateTo() {
    return browser.get(this.test) as Promise<any>;
  }

  

//   setUsername() {
//     return element(by.css('#cname')).sendKeys('amrit@123gmail.com');
//   }

//   setNum(){
//     return element(by.css('#ccnum')).sendKeys('1234 5678 9101 2345');
//   }

//   setMonth() {
//     return element(by.css('#expmonth')).sendKeys('amrit@123gmail.com');
//   }

//   setYear(){
//     return element(by.css('#expyear')).sendKeys('1234 5678 9101 2345');
//   }

//   setCVV(){
//     return element(by.css('#cvv')).sendKeys('222');
//   }

//   clickLogin(){
//     // return element(by.css('#btn-login')).click();
//   }
} 
