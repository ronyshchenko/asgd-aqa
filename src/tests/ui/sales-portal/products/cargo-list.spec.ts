import test, { expect } from "@playwright/test";
import { credentials } from "config/env";
//import { NOTIFICATIONS } from "data/salesPortal/notifications";
//import { generateProductData } from "data/salesPortal/products/generateProductData";
import { HomePage } from "ui/pages/home.page";
//import { AddNewProductPage } from "ui/pages/products/addNewProduct.page";
import { CargoListPage } from "ui/pages/cargo/cargoList.page";

test.describe("[ASGD Portal] [Cargo]", async () => {
  test("Check work cargo list", async ({ page }) => {
    const homePage = new HomePage(page);
    const cargoListPage = new CargoListPage(page);
    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });

    await homePage.open();

    await expect(emailInput).toBeVisible();
    await emailInput.fill(credentials.username);
    await passwordInput.fill(credentials.password);
    await loginButton.click();

    await homePage.waitForOpened();
    await homePage.clickOnViewModule("Cargo");
    await cargoListPage.waitForOpened();
    await expect(cargoListPage.form).toBeVisible();
    await cargoListPage.selectNumberCargo.fill("21237985");
    await cargoListPage.buttonSearch.click();
    await expect(cargoListPage.table).toBeVisible();
    await expect(cargoListPage.notific).toHaveText("21237985");
  });
});
