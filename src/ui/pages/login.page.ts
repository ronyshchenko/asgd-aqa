import { AsgdPortalPage } from "./asgdPortal.page";

export class LoginPage extends AsgdPortalPage {
  readonly welcomeText = this.page.getByText("Перевірка гуманітарної допомоги", { exact: true });
  readonly loginButton = this.page.getByRole("button", { name: "Вхід" });
  readonly emailInput = this.page.locator("#username");
  readonly passwordInput = this.page.locator("#password");
  readonly notific = this.page.locator("td:nth-child(2)");

  readonly uniqueElement = this.welcomeText;

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
