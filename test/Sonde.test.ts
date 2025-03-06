import { Direction } from "../src/Direction";
import { Helicoptere } from "../src/Helicoptere";
import { ModuleMartien } from "../src/ModuleMartien";
import { Position } from "../src/Position";
import { Rover } from "../src/Rover";
import { Sonde } from "../src/Sonde";

describe("Sonde", () => {
  it("Le rover doit être récupéré", () => {
    // GIVEN
    const perseverance: ModuleMartien = new Rover(
      Direction.NORD,
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
    const ingenuity: ModuleMartien = new Helicoptere(
      Direction.NORD,
      new Position(4, 4, 50)
    );
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(ingenuity);

    // THEN
    expect(ingenuity.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(ingenuity.getPosition());
  });
});
