import { test, expect } from "fixtures/pages.fixture";
import { credentials } from "config/env";
//import { NOTIFICATIONS } from "data/cargoPortal/notifications";
import { generateCargoData } from "data/cargoPortal/cargoes/generateCargoData";
//import _ from "lodash";
// import { HomePage } from "ui/pages/home.page";
// import { AddNewCargoPage } from "ui/pages/cargo/addNewCargo.page";
// import { MyCargoListPage } from "ui/pages/cargo/myCargoList.page";
//import { CargoDetailsModal } from "ui/pages/cargo/details.modal";

//import { CargoListPage } from "ui/pages/cargo/cargoList.page";

test.describe("[ASGD Portal] [MyCargo]", async () => {
  test("Check work my cargo list", async ({ page, homePage, myCargoListPage }) => {
    // const homePage = new HomePage(page);
    // const myCargoListPage = new MyCargoListPage(page);

    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });

    await homePage.open();

    await expect(emailInput).toBeVisible();
    await emailInput.fill(credentials.username);
    await passwordInput.fill(credentials.password);
    await loginButton.click();

    await homePage.waitForOpened();
    await homePage.clickOnViewModule("Mycargo");
    await myCargoListPage.waitForOpened();
    await expect(myCargoListPage.textBox).toBeVisible();
    await myCargoListPage.textBox.fill("ДАНІ ПРО ВАНТАЖ НА МИТНИЦІ");
    await expect(myCargoListPage.table).toBeVisible();
    await expect(myCargoListPage.notific).toHaveText("ДАНІ ПРО ВАНТАЖ НА МИТНИЦІ");
  });

  test("Check work add new cargo in list", async ({ page, homePage, myCargoListPage, addNewCargoPage }) => {
    // const homePage = new HomePage(page);
    // const myCargoListPage = new MyCargoListPage(page);
    // const addNewCargoPage = new AddNewCargoPage(page);
    //const cargoDetailsModal = new CargoDetailsModal(page);

    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });

    await homePage.open();

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
    //await productsListPage.waitForOpened();
    // await expect(productsListPage.toastMessage).toContainText(NOTIFICATIONS.PRODUCT_CREATED);
    // await expect(productsListPage.tableRowByName(productData.name)).toBeVisible();
    await expect(addNewCargoPage.toReestr).toBeVisible();
    await addNewCargoPage.toReestr.click();
    await expect(addNewCargoPage.notific1).toBeVisible();
    await expect(addNewCargoPage.notific1).toHaveText("Гуманітарна допомога");

    // await expect(productsListPage.toastMessage).toContainText(NOTIFICATIONS.PRODUCT_CREATED);
    // await expect(productsListPage.tableRowByName(productData.name)).toBeVisible();

    // await expect.soft(myCargoListPage.recipientCell(cargoData.nameSender)).toHaveText("2653711099");
    // await expect
    //   .soft(myCargoListPage.senderNameCell(cargoData.nameSender))
    //   .toHaveText(cargoData.nameSender.toString().toUpperCase());

    await myCargoListPage.deleteButton(cargoData.nameSender).click();
    //await expect(cargoDetailsModal.uniqueElement).toBeVisible();

    await myCargoListPage.detailsModal.clickEnter();

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
