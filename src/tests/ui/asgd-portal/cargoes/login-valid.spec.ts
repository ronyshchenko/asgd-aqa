import test, { expect } from "@playwright/test";
import { credentials } from "config/env";
import { NOTIFICATIONS } from "data/cargoPortal/notifications";
import { LoginPage } from "ui/pages/login.page";
test.describe("[ASGD Portal] Autorization", async () => {
  test("Autorization with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });
    const notific = page.locator('//*[@id="primary-content"]/div/div/div/h6[2]');

    await loginPage.open();

    await expect(emailInput).toBeVisible();
    await emailInput.fill(credentials.username);
    await passwordInput.fill(credentials.password);
    await loginButton.click();
    await expect(notific).toBeVisible();

    await expect(notific).toContainText(NOTIFICATIONS.REGISTER_SUCCESS);
  });
});
