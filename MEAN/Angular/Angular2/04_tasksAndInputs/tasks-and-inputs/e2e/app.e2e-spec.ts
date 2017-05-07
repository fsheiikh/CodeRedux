import { TasksAndInputsPage } from './app.po';

describe('tasks-and-inputs App', () => {
  let page: TasksAndInputsPage;

  beforeEach(() => {
    page = new TasksAndInputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
