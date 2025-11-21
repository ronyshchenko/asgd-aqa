import { AsgdPortalPage } from "../asgdPortal.page";
export class CargoDetailsModal extends AsgdPortalPage {
  readonly uniqueElement = this.page.locator("//*[@class='swal2-popup swal2-modal swal-popup swal2-show']");

  readonly title = this.uniqueElement.locator("h5");
  readonly enterButton = this.uniqueElement.getByRole("button", { name: "ПІДТВЕРДИТИ" });
  readonly enter1Button = this.page.getByRole("button", { name: "ПІДТВЕРДИТИ" });

  readonly cancelButton = this.uniqueElement.locator("button.btn-secondary");

  readonly productValue = this.uniqueElement.locator("p");

  async clickCancel() {
    await this.cancelButton.click();
  }

  async clickEnter() {
    await this.enterButton.click();
    await this.enter1Button.click();
  }
}
