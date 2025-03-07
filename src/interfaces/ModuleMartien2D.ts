import { Position } from "../Position";

export interface ModuleMartien2D {
  getPosition(): Position;
  avancer(): void;
  reculer(): void;
  activerRecuperation(): void;
  isPretPourRecuperation(): boolean;
}
