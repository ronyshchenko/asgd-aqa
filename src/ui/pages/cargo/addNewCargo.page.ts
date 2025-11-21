import { ICargo } from "data/types/cargo.types";
import { AsgdPortalPage } from "../asgdPortal.page";

export class AddNewCargoPage extends AsgdPortalPage {
  readonly recipient = this.page.getByLabel("Найменування отримувача (ЄР, ЄДРПОУ)", { exact: true }).first();
  readonly nameSender = this.page.locator("//input[@name='donor_name']");
  readonly senderInfo = this.page.locator("//input[@name='c_details']");
  readonly country = this.page.getByRole("combobox", { name: "Країна відправлення" });
  readonly countr = this.page.getByRole("option", { name: "АМЕРИКАНСЬКЕ САМОА" });
  readonly accordCheckbox = this.page.getByRole("checkbox");
  readonly publicRadioButton = this.page.locator("input[value='no']");
  readonly title = this.page.getByText("Реєстрація надходження", { exact: true });
  readonly saveButton = this.page.getByRole("button", { name: "Зберегти" });
  readonly toReestr = this.page.getByRole("button", { name: "До реєстру" });
  readonly notific = this.page.getByText("Реєстрація надходження", { exact: true });
  readonly notific1 = this.page.getByText("Гуманітарна допомога", { exact: true });

  readonly uniqueElement = this.title;

  async fillForm(cargoData: Partial<ICargo>) {
    if (cargoData.recipient) {
      await this.recipient.click();
      await this.recipient.fill(cargoData.recipient);
      await this.recipient.press("Enter");
    }
    if (cargoData.nameSender) await this.nameSender.fill(cargoData.nameSender);
    if (cargoData.senderInfo) await this.senderInfo.fill(cargoData.senderInfo.toString());
    await this.senderInfo.press("Tab");
    if (cargoData.country) {
      //await this.country.click();
      await this.country.fill(cargoData.country);
      await this.country.press("Enter");
    }
  }

  async clickSave() {
    await this.saveButton.click();
  }
}
