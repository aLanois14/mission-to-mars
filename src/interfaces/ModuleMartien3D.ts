import { ModuleMartien2D } from "./ModuleMartien2D";

export interface ModuleMartien3D extends ModuleMartien2D {
  monter(): void;
  descendre(): void;
}
