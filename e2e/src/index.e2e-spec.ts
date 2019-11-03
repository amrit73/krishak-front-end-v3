import { AppPage } from './index.po';
import { browser, logging } from 'protractor';

describe('Open the project', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open the index page', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('New app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});