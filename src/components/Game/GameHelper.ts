import {
  TShipLayout,
  TGridInfo,
  SHIPTYPE,
  TShipTypes,
  TShipWithHealth,
} from "../../types";

export const shipLayout = [
  {
    ship: SHIPTYPE.CARRIER,
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  },
  {
    ship: SHIPTYPE.BATTBLESHIP,
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },
  {
    ship: SHIPTYPE.CRUISER,
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
  },
  {
    ship: SHIPTYPE.SUBMARINE,
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  },
  {
    ship: SHIPTYPE.DESTROYER,
    positions: [
      [0, 0],
      [1, 0],
    ],
  },
];

export const shipTypes = {
  [SHIPTYPE.CARRIER]: { size: 5, count: 1 },
  [SHIPTYPE.BATTBLESHIP]: { size: 4, count: 1 },
  [SHIPTYPE.CRUISER]: { size: 3, count: 1 },
  [SHIPTYPE.SUBMARINE]: { size: 3, count: 1 },
  [SHIPTYPE.DESTROYER]: { size: 2, count: 1 },
};
export const initialGameBoardState = (
  shipsLayout: TShipLayout[],
  boardSize: number
): TGridInfo[] => {
  const result: TGridInfo[] = [];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const match: TShipLayout | undefined = shipsLayout.find(
        (ship: TShipLayout) => {
          return ship.positions.some(
            (position: number[]) => position[0] === i && position[1] === j
          );
        }
      );
      if (match) {
        result.push({ ship: match.ship, position: `${i}${j}`, fired: false });
      } else {
        result.push({ ship: "none", position: `${i}${j}`, fired: false });
      }
    }
  }
  return result;
};

export const initialShipHealthState = (
  shipsInfo: TShipTypes
): TShipWithHealth[] => {
  return Object.entries(shipsInfo).map(([key, value]) => {
    return {
      ship: key as SHIPTYPE,
      health: value.size * value.count,
      damage: 0,
    };
  });
};
