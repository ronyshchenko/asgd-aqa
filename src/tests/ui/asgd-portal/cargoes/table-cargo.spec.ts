import { test, expect } from "fixtures/pages.fixture";
import { credentials } from "config/env";
//import { NOTIFICATIONS } from "data/cargoPortal/notifications";
import { generateCargoData } from "data/cargoPortal/cargoes/generateCargoData";
//import _ from "lodash";
import { LoginPage } from "ui/pages/login.page";

test.describe("[ASGD Portal] [MyCargo]", async () => {
  test("Check work add new cargo in list", async ({ page, homePage, myCargoListPage, addNewCargoPage }) => {
    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });
    const loginPage = new LoginPage(page);
    await loginPage.open();

    await expect(emailInput).toBeVisible();
    await emailInput.fill(credentials.username);
    await passwordInput.fill(credentials.password);
    await loginButton.click();

    await homePage.waitForOpened();
    await homePage.clickOnViewModule("Mycargo");
    await myCargoListPage.waitForOpened();

    await myCargoListPage.clickAddNewCargo();
    await addNewCargoPage.waitForOpened();
    const cargoData = generateCargoData();
    await addNewCargoPage.fillForm(cargoData);
    await addNewCargoPage.accordCheckbox.click();
    await addNewCargoPage.publicRadioButton.check();
    await expect(addNewCargoPage.saveButton).toBeVisible();

    await addNewCargoPage.saveButton.click();
    await expect(addNewCargoPage.toReestr).toBeVisible();
    await addNewCargoPage.toReestr.click();
    await myCargoListPage.waitForOpened();

    await expect
      .soft(myCargoListPage.senderNameCell(cargoData.nameSender))
      .toHaveText(cargoData.nameSender.toUpperCase());
    await expect.soft(myCargoListPage.statusCell(cargoData.nameSender)).toHaveText("СТВОРЕНО");

    // await myCargoListPage.detailsModal.clickEnter();
    // await myCargoListPage.waitForOpened();
    // await expect(myCargoListPage.notific).toBeVisible();

    // await expect(myCargoListPage.notific).toHaveText("Гуманітарна допомога");

    //await expect(cargoDetailsModal.uniqueElement).toBeVisible();

    // await expect(productsListPage.toastMessage).toContainText(NOTIFICATIONS.PRODUCT_CREATED);
    // const { detailsModal } = productsListPage;
    // await detailsModal.waitForOpened();
    // const actual = await detailsModal.getData();
    // expect(_.omit(actual, ["createdOn"])).toEqual(productData);

    // await myCargoListPage.detailsButton(cargoData.nameSender).click();
    // const { detailsModal } = myCargoListPage;
    // await detailsModal.waitForOpened();
    // const actual = await detailsModal.getData();
    // expect(_.omit(actual, ["createdOn"])).toEqual(cargoData);
    // await expect.soft(myCargoListPage.manufacturerCell(cargoData.nameSender).toHaveText(cargoData.senderInfo.toString));
    // await expect.soft(myCargoListPage.manufacturerCell(cargoData.nameSender).toHaveText(cargoData.country));

    //await expect.soft(productsListPage.createdOnCell(productData.name)).toHaveText("");

    //  const productFromTable = await productsListPage.getProductData(productData.name);
    // const expectedProduct = _.omit(productData, ["notes", "amount"]);
    // const actualProduct = _.omit(productFromTable, ["createdOn"]);
    // expect(actualProduct).toEqual(expectedProduct);

    // const tableData = await productsListPage.getTableData();
    // console.log(tableData);
  });
});
