import { Direction } from "./Direction";
import { ModuleMartien } from "./ModuleMartien";
import { Position } from "./Position";

export class Rover implements ModuleMartien {
  private pretPourRecuperation: boolean = false;
  private readonly _direction: Direction;
  protected _position: Position;

  constructor(readonly direction: Direction, readonly position: Position) {
    this._direction = direction;
    this._position = position;
  }

  public avancer() {
    switch (this._direction) {
      case Direction.NORD:
        this._position = new Position(
          this._position.x,
          this._position.y + 1,
          this._position.z
        );
        break;

      case Direction.SUD:
        this._position = new Position(
          this._position.x,
          this._position.y - 1,
          this._position.z
        );
        break;

      case Direction.OUEST:
        this._position = new Position(
          this._position.x - 1,
          this._position.y,
          this._position.z
        );
        break;

      default:
        this._position = new Position(
          this._position.x + 1,
          this._position.y,
          this._position.z
        );
    }
  }

  public reculer() {
    switch (this._direction) {
      case Direction.NORD:
        this._position = new Position(
          this._position.x,
          this._position.y - 1,
          this._position.z
        );
        break;

      case Direction.SUD:
        this._position = new Position(
          this._position.x,
          this._position.y + 1,
          this._position.z
        );
        break;

      case Direction.OUEST:
        this._position = new Position(
          this._position.x + 1,
          this._position.y,
          this._position.z
        );
        break;

      default:
        this._position = new Position(
          this._position.x - 1,
          this._position.y,
          this._position.z
        );
    }
  }

  isPretPourRecuperation(): boolean {
    return this.pretPourRecuperation;
  }

  getPosition(): Position {
    return this._position;
  }

  monter() {
    throw new Error("Un rover ne vole pas");
  }

  descendre() {
    throw new Error("Un rover ne vole pas");
  }

  activerRecuperation() {
    this.pretPourRecuperation = true;
  }
}
