import { TShipLayout, TGridInfo } from "../../../types";
import { SHIPTYPE } from "../../../types";
export const BOXES_NUMBER = 100;

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
