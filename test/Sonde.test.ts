import { Direction } from "../src/Direction";
import { Direction3D } from "../src/Direction3D";
import { Helicoptere } from "../src/Helicoptere";
import { ModuleMartien2D } from "../src/interfaces/ModuleMartien2D";
import { Mouvement3D } from "../src/Mouvement3D";
import { MouvementNord } from "../src/MouvementNord";
import { Position } from "../src/Position";
import { Rover } from "../src/Rover";
import { Sonde } from "../src/Sonde";

describe("Sonde", () => {
  let mouvement3D;

  beforeEach(() => {
    mouvement3D = new Direction3D(new Mouvement3D());
  });

  it("Le rover doit être récupéré", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const perseverance: ModuleMartien2D = new Rover(
      mouvementNord,
      new Position(4, 4, 0)
    );
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(perseverance);

    // THEN
    expect(perseverance.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(perseverance.getPosition());
  });

  it("L’hélicoptère doit être récupéré", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const ingenuity: ModuleMartien2D = new Helicoptere(
      mouvementNord,
      new Position(4, 4, 50),
      mouvement3D
    );
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(ingenuity);

    // THEN
    expect(ingenuity.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(ingenuity.getPosition());
  });
});
