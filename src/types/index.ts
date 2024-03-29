export enum SHIPTYPE {
  CARRIER = "carrier",
  BATTBLESHIP = "battleship",
  CRUISER = "cruiser",
  SUBMARINE = "submarine",
  DESTROYER = "destroyer",
}

export type TShipType = {
  ship: SHIPTYPE;
  size: number;
  count: number;
  positions: number[][];
  life: number;
};

export type TShipLayout = {
  ship: SHIPTYPE;
  positions: number[][];
};

export type TShipInfo = {
  size: number;
  count: number;
};

export type TShipTypes = {
  [key in SHIPTYPE]: TShipInfo;
};

export type TShipWithHealth = {
  ship: SHIPTYPE;
  health: number;
  damage: number;
};

export type TGrid = SHIPTYPE | "none";

export type TGridInfo = {
  ship: TGrid;
  position: string;
  fired: boolean;
};
