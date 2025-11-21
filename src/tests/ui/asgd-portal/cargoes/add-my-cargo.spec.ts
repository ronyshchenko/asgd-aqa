import test, { expect } from "@playwright/test";
import { credentials } from "config/env";
//import { NOTIFICATIONS } from "data/cargoPortal/notifications";
import { generateCargoData } from "data/cargoPortal/cargoes/generateCargoData";
import { HomePage } from "ui/pages/home.page";
import { AddNewCargoPage } from "ui/pages/cargo/addNewCargo.page";
import { MyCargoListPage } from "ui/pages/cargo/myCargoList.page";

test.describe("[ASGD Portal] [MyCargo]", async () => {
  test("Check work my cargo list", async ({ page }) => {
    const homePage = new HomePage(page);
    const myCargoListPage = new MyCargoListPage(page);

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

  test("Check work add new cargo in list", async ({ page }) => {
    const homePage = new HomePage(page);
    const myCargoListPage = new MyCargoListPage(page);
    const addNewCargoPage = new AddNewCargoPage(page);

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
    console.log(cargoData);
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
    const r = await myCargoListPage.tableRowByIndex(2).innerText;
    console.log(r);
    await expect(addNewCargoPage.notific1).toHaveText("Гуманітарна допомога");
  });
});
