import { Direction } from "./Direction";
import { ModuleMartien } from "./interfaces/ModuleMartien";
import { Position } from "./Position";
import { Rover } from "./Rover";

export class Helicoptere extends Rover implements ModuleMartien {
  constructor(
    override readonly direction: Direction,
    override readonly position: Position
  ) {
    super(direction, position);
  }

  override monter() {
    this._position = new Position(
      this._position.x,
      this._position.y,
      this._position.z + 1
    );
  }

  override descendre() {
    this._position = new Position(
      this._position.x,
      this._position.y,
      this._position.z - 1
    );
  }
}
