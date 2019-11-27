import { browser, by, element } from 'protractor';

export class Productpage {
  test = browser.baseUrl + '/admin/additems';
  navigateTo() {
    return browser.get(this.test) as Promise<any>;
  }

  

  setUsername() {
    return element(by.css('#productname')).sendKeys('syau');
  }

  setPassword(){
    return element(by.css('#productcategory')).sendKeys('falful');
  }
  setUnit() {
    return element(by.css('#productunit')).sendKeys('1 kg');
  }

  setDes(){
    return element(by.css('#productdescription')).sendKeys('Swadilo');
  }

  setDis(){
    return element(by.css('#productdiscount')).sendKeys('5%');
  }
  setLoc() {
    return element(by.css('#productlocation')).sendKeys('Kathmandu');
  }

  setQuant(){
    return element(by.css('#productquantity')).sendKeys('2200');
  }

  clickBttt(){
    // return element(by.css('#buttonadd')).click();
  }
} 
