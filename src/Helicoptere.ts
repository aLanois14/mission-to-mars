import { Direction } from "./Direction";
import { Direction3D } from "./Direction3D";
import { ModuleMartien3D } from "./interfaces/ModuleMartien3D";
import { Position } from "./Position";
import { Rover } from "./Rover";

export class Helicoptere extends Rover implements ModuleMartien3D {
  private readonly _direction3D: Direction3D;

  constructor(
    override readonly direction: Direction,
    override readonly position: Position,
    readonly direction3D: Direction3D
  ) {
    super(direction, position);
    this._direction3D = new Direction3D(direction3D.mouvement3D);
  }

  monter() {
    this._position = this._direction3D.mouvement3D.monter(this._position);
  }

  descendre() {
    this._position = this._direction3D.mouvement3D.descendre(this._position);
  }

  override activerRecuperation() {
    this._atterir();
    super.activerRecuperation();
  }

  private _atterir() {
    [...Array(this.getPosition().z)].forEach(() => {
      this.descendre();
    });
  }
}
