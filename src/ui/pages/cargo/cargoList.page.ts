import { AsgdPortalPage } from "../asgdPortal.page";

export class CargoListPage extends AsgdPortalPage {
  readonly searchCargoButton = this.page.locator('[name="add-button"]');
  readonly addNewProductButton = this.page.locator('[name="add-button"]');
  readonly welcomeText = this.page.getByText("Реєстр гуманітарної допомоги", { exact: true });

  readonly form = this.page.locator("div.MuiCardContent-root");
  readonly selectNumberCargo = this.page.locator("//input[@name='p_cargo']");
  readonly buttonSearch = this.page.getByRole("button", { name: "Пошук" });
  readonly notific = this.page.locator("td:nth-child(2)");
  readonly table = this.page.locator('//*[@id="primary-content"]/div/section[2]/div/div[1]/table').nth(0);
  readonly tableRowByName = (productName: string) =>
    this.page.locator("table tbody tr", { has: this.page.locator("td", { hasText: productName }) });

  readonly uniqueElement = this.welcomeText;

  async clickAddNewProduct() {
    await this.addNewProductButton.click();
  }
}
