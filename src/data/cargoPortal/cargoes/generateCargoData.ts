import { faker } from "@faker-js/faker";
import { ICargo } from "data/types/cargo.types";
import { getRandomEnumValue } from "utils/enum.utils";
import { RECIPIENTS } from "./manufacturers";
import { COUNTRIES } from "./country";

export function generateCargoData(params?: Partial<ICargo>): ICargo {
  return {
    nameSender: faker.commerce.product() + faker.number.int({ min: 1, max: 100000 }),
    recipient: getRandomEnumValue(RECIPIENTS),
    senderInfo: faker.commerce.product() + faker.number.int({ min: 1, max: 100 }),
    //senderInfo: faker.number.int({ min: 1, max: 99999 }),
    country: getRandomEnumValue(COUNTRIES),
    ...params,
  };
}
