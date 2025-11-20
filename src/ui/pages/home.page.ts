import { Locator } from "@playwright/test";
import { AsgdPortalPage } from "./asgdPortal.page";

type HomeModuleButton = "Cargo" | "Mycargo";

export class HomePage extends AsgdPortalPage {
  readonly welcomeText = this.page.getByRole("heading", { name: "ОНИЩЕНКО РОМАН СТЕПАНОВИЧ" });
  readonly cargoButton = this.page.getByRole("link", { name: "Перелік вантажів" });
  readonly myCargoButton = this.page.getByText("Мої вантажі/ Декларація", { exact: true });
  readonly uniqueElement = this.welcomeText;

  async clickOnViewModule(module: HomeModuleButton) {
    const moduleButtons: Record<HomeModuleButton, Locator> = {
      Cargo: this.cargoButton,
      Mycargo: this.myCargoButton,
    };

    await moduleButtons[module].click();
  }
}
