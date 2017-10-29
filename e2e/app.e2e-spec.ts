import { ProyectoangularPage } from './app.po';

describe('proyectoangular App', () => {
  let page: ProyectoangularPage;

  beforeEach(() => {
    page = new ProyectoangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
