import { test as base } from '@playwright/test';
import { GoogleSearchPage } from '../pages/GoogleSearchPage';

type Fixtures = {
  googleSearchPage: GoogleSearchPage;
};

export const test = base.extend<Fixtures>({
  googleSearchPage: async ({ page }, use) => {
    await use(new GoogleSearchPage(page));
  },
});

export { expect } from '@playwright/test';
