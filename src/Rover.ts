import { Direction } from "./Direction";
import { ModuleMartien } from "./interfaces/ModuleMartien";
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
    this._deplacer(1);
  }

  public reculer() {
    this._deplacer(-1);
  }

  private _deplacer(sens: number): void {
    const { x, y, z } = this._position;

    switch (this._direction) {
      case Direction.NORD:
        this._position = new Position(x, y + sens, z);
        break;
      case Direction.SUD:
        this._position = new Position(x, y - sens, z);
        break;
      case Direction.OUEST:
        this._position = new Position(x - sens, y, z);
        break;
      case Direction.EST:
        this._position = new Position(x + sens, y, z);
        break;
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
