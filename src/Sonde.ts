import { ModuleMartien2D } from "./interfaces/ModuleMartien2D";

export class Sonde {
  preparerRecuperation(moduleMartien: ModuleMartien2D) {
    moduleMartien.activerRecuperation();
  }
}
