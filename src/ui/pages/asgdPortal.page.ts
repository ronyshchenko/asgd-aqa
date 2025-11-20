import { expect, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { ASGD_PORTAL_URL } from "config/env";

export abstract class AsgdPortalPage extends BasePage {
  readonly spinner = this.page.locator(".spinner-border");
  readonly toastMessage = this.page.locator(".toast-body");
  abstract readonly uniqueElement: Locator;

  async waitForOpened() {
    await expect(this.uniqueElement).toBeVisible({ visible: true, timeout: 7000 });
    //await expect(this.spinner).toHaveCount(0);
  }

  async open() {
    await this.page.goto(ASGD_PORTAL_URL);
  }
}
