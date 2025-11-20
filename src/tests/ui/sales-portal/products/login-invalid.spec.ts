import test, { expect } from "@playwright/test";
// import { credentials } from "config/env";
// import { NOTIFICATIONS } from "data/salesPortal/notifications";
import { LoginPage } from "ui/pages/login.page";
import userData from "data/cargoPortal/register.invalid_data";

test.describe("[ASGD Portal] Autorization with valid credentials", async () => {
  test("Autorization with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.getByRole("button", { name: "Вхід" });
    const notificLog = page.locator("//p[@id='username']");
    const notificPas = page.locator("//p[@id='password']");

    const expectedMessagePassword = "Пароль обов'язковий";
    const expectedMessageLogin = "Логін обов'язковий";

    await loginPage.open();

    await expect(emailInput).toBeVisible();
    await emailInput.fill("");
    await passwordInput.fill("");
    await loginButton.click();

    //await expect(emailInput).toBeVisible();

    await expect(notificPas).toContainText(expectedMessagePassword);
    await expect(notificLog).toContainText(expectedMessageLogin);
  });
  for (const { title, credentials, expectedMessage } of userData) {
    test(title, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();

      const emailInput = page.locator("#username");
      const passwordInput = page.locator("#password");
      const loginButton = page.getByRole("button", { name: "Вхід" });

      // const userLink = page.locator("#username");
      // const passwordLink = page.locator("#password");
      // const submitButton = page.getByRole("button", { name: "Вхід" });
      const notific = page.locator('//*[@id="tabpanel-0"]/div/div/div[2]/div/div/div/div[3]');

      await emailInput.fill(credentials.username);
      await passwordInput.fill(credentials.password);
      await loginButton.click();
      await expect(notific).toContainText(expectedMessage);
    });
  }
});
