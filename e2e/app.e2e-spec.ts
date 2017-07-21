import { KacperbPage } from './app.po';

describe('kacperb App', () => {
  let page: KacperbPage;

  beforeEach(() => {
    page = new KacperbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to kb!');
  });
});
