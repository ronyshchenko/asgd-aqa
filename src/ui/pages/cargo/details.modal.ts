//import { ICArgoDetails } from "data/types/cargo.types";
import { AsgdPortalPage } from "../asgdPortal.page";
//import { RECIPIENTS } from "data/cargoPortal/cargoes/manufacturers";

export class CargoDetailsModal extends AsgdPortalPage {
  readonly uniqueElement = this.page.locator("//*[@class='swal2-popup swal2-modal swal-popup swal2-show']");

  readonly title = this.uniqueElement.locator("h5");
  readonly enterButton = this.uniqueElement.getByRole("button", { name: "ПІДТВЕРДИТИ" });
  readonly enter1Button = this.page.getByRole("button", { name: "ПІДТВЕРДИТИ" });

  readonly cancelButton = this.uniqueElement.locator("button.btn-secondary");

  readonly productValue = this.uniqueElement.locator("p");

  // async clickClose() {
  //   await this.closeButton.click();
  // }

  async clickCancel() {
    await this.cancelButton.click();
  }

  // async clickEdit() {
  //   await this.editButton.click();
  // }

  async clickEnter() {
    await this.enterButton.click();
    await this.enter1Button.click();
  }

  // async getData(): Promise<ICargo Details> {
  //   const [recipname, amount, price, manufacturer, createdOn, notes] = await this.productValue.allInnerTexts();

  //   return {
  //     name: name!,
  //     amount: +amount!,
  //     price: +price!,
  //     manufacturer: manufacturer! as MANUFACTURERS,
  //     createdOn: createdOn!,
  //     notes: notes === "-" ? "" : notes!,
  //   };
  // }
}
