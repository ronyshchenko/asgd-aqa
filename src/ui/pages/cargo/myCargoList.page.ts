import { RECIPIENTS } from "data/cargoPortal/cargoes/manufacturers";
import { AsgdPortalPage } from "../asgdPortal.page";
import { ICargoInTable } from "data/types/cargo.types";
import { COUNTRIES } from "data/cargoPortal/cargoes/country";
import { CargoDetailsModal } from "./details.modal";

export class MyCargoListPage extends AsgdPortalPage {
  readonly detailsModal = new CargoDetailsModal(this.page);

  readonly addNewCargoButton = this.page.getByRole("button", { name: "Додати нове надходження гуманітарної допомоги" });
  readonly welcomeText = this.page.getByText("Гуманітарна допомога", { exact: true });
  readonly selectStatusCargo = this.page.getByRole("textbox", { name: "Статус" });
  readonly notific = this.page.getByText("Гуманітарна допомога", { exact: true });
  readonly textBox = this.page.getByLabel("Статус");
  readonly table = this.page.locator(".table-responsive");

  readonly tableRow = this.page.locator("tbody tr");
  readonly tableRowByName = (productName: string) =>
    this.page.locator("table tbody tr", { has: this.page.locator("td", { hasText: productName }) });
  readonly tableRowByIndex = (index: number) => this.page.locator("table tbody tr").nth(index);
  readonly recipientCell = (productName: string) => this.tableRowByName(productName).locator("td").nth(1);
  readonly senderNameCell = (productName: string) => this.tableRowByName(productName).locator("td").nth(2);

  readonly senderInfoCell = (productName: string) => this.tableRowByName(productName).locator("td").nth(3);
  readonly countryCell = (productName: string) => this.tableRowByName(productName).locator("td").nth(4);
  readonly statusCell = (productName: string) => this.tableRowByName(productName).locator("td").nth(7);

  readonly createdOnCell = (nameOrIndex: string | number) =>
    typeof nameOrIndex === "string"
      ? this.tableRowByName(nameOrIndex).locator("td").nth(3)
      : this.tableRowByIndex(nameOrIndex).locator("td").nth(3);

  readonly editButton = (productName: string) => this.tableRowByName(productName).getByTitle("Edit");
  readonly detailsButton = (productName: string) => this.tableRowByName(productName).getByTitle("Details");
  readonly deleteButton = (productName: string) =>
    this.tableRowByName(productName).locator("//button[@id[contains(., 'delete')]]");

  readonly uniqueElement = this.welcomeText;

  async clickAddNewCargo() {
    await this.addNewCargoButton.click();
  }

  async getCargoData(productName: string): Promise<ICargoInTable> {
    const [recipient, nameSender, senderInfo, country, createdOn] = await this.tableRowByName(productName)
      .locator("td")
      .allInnerTexts();
    return {
      recipient: recipient! as RECIPIENTS,
      nameSender: nameSender!,
      senderInfo: senderInfo!,
      country: country! as COUNTRIES,
      createdOn: createdOn!,
    };
  }
  // async getTableData(): Promise<ICargoInTable[]> {
  //   const data: ICargoInTable[] = [];

  //   const rows = await this.tableRow.all();
  //   for (const row of rows) {
  //     const [recipient, nameSender, senderInfo, country] = await row.locator("td").allInnerTexts();
  //     data.push({
  //       recipient: recipient! as RECIPIENTS,
  //       nameSender: nameSender!,
  //       senderInfo: senderInfo!,
  //       country: country! as COUNTRIES,
  //     });
  //   }
  //   return data;
  // }
}
