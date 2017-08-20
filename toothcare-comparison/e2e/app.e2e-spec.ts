import { ToothcareComparisonPage } from './app.po';

describe('toothcare-comparison App', () => {
  let page: ToothcareComparisonPage;

  beforeEach(() => {
    page = new ToothcareComparisonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
