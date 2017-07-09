import { ShinchokuGanttPage } from './app.po';

describe('shinchoku-gantt App', () => {
  let page: ShinchokuGanttPage;

  beforeEach(() => {
    page = new ShinchokuGanttPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
