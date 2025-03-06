import { Position } from "../Position";

export interface ModuleMartien {
  getPosition(): Position;
  avancer(): void;
  reculer(): void;
  monter(): void;
  descendre(): void;
  activerRecuperation(): void;
  isPretPourRecuperation(): boolean;
}
