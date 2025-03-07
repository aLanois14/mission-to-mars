import { Position } from "./Position";

export class Mouvement3D {
  monter(position: Position): Position {
    return new Position(position.x, position.y, position.z + 1);
  }

  descendre(position: Position): Position {
    return new Position(position.x, position.y, position.z - 1);
  }
}
