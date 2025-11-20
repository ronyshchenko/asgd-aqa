import { RECIPIENTS } from "data/cargoPortal/cargoes/manufacturers";
import { COUNTRIES } from "data/cargoPortal/cargoes/country";

export interface ICargo {
  nameSender: string;
  recipient: RECIPIENTS;
  senderInfo: string;
  country: COUNTRIES;
  //notes?: string;
}

export interface ICreatedOn {
  createdOn: string;
}

// export type IProductInTable = Pick<IProduct, "name" | "manufacturer" | "price"> & { createdOn: string };
export interface ICargoInTable
  extends Pick<ICargo, "nameSender" | "recipient" | "senderInfo" | "country">,
    ICreatedOn {}

export interface ICargoDetails extends Required<ICargo>, ICreatedOn {}
