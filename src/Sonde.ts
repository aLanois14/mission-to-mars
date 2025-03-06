import { Helicoptere } from "./Helicoptere";
import { ModuleMartien } from "./ModuleMartien";

export class Sonde {
  preparerRecuperation(moduleMartien: ModuleMartien) {
    if (moduleMartien instanceof Helicoptere) {
      this.poserHelicoptere(moduleMartien);
    }

    moduleMartien.activerRecuperation();
  }

  private poserHelicoptere(moduleMartien: ModuleMartien) {
    const altitude: number = moduleMartien.getPosition().z;

    this.atterir(moduleMartien, altitude);
  }

  private atterir(moduleMartien: ModuleMartien, altitude: number) {
    [...Array(altitude)].forEach(() => {
      moduleMartien.descendre();
    });
  }
}
