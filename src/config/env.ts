import { ICredentials } from "data/types/credentials.types";

export const ASGD_PORTAL_URL = "https://test-human-aid.ioc.gov.ua/admin";
export const credentials: ICredentials = {
  username: process.env.USER_NAME!,
  password: process.env.USER_PASSWORD!,
};
