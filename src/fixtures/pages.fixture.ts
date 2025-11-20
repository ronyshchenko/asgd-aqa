import {
  test as base,
  expect,
  // Page
} from "@playwright/test";
import { HomePage } from "ui/pages/home.page";
import { AddNewCargoPage } from "ui/pages/cargo/addNewCargo.page";
import { MyCargoListPage } from "ui/pages/cargo/myCargoList.page";

export interface IPages {
  homePage: HomePage;
  myCargoListPage: MyCargoListPage;
  addNewCargoPage: AddNewCargoPage;
}

const test = base.extend<IPages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  myCargoListPage: async ({ page }, use) => {
    await use(new MyCargoListPage(page));
  },
  addNewCargoPage: async ({ page }, use) => {
    await use(new AddNewCargoPage(page));
  },
});

// export class Pages {
//   public homePage: HomePage;
//   public productsListPage: ProductsListPage;
//   public addNewProductPage: AddNewProductPage;

//   constructor(page: Page) {
//     this.homePage = new HomePage(page);
//     this.productsListPage = new ProductsListPage(page);
//     this.addNewProductPage = new AddNewProductPage(page);
//   }
// }

// interface IPages {
//   pages: Pages;
// }

// const test = base.extend<IPages>({
//   pages: async ({ page }, use) => {
//     await use(new Pages(page));
//   },
// });

export { test, expect };
