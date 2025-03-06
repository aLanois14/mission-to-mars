import { Direction } from "../src/Direction";
import { Helicoptere } from "../src/Helicoptere";
import { ModuleMartien } from "../src/interfaces/ModuleMartien";
import { Position } from "../src/Position";

describe("Hélicoptère", () => {
  it("Initialisation de l’atterissage", () => {
    // WHEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers le nord si tourné vers le nord", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.NORD,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers le sud si tourné vers le sud", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.SUD,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers l’ouest si tourné vers l’ouest", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.OUEST,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers le sud si tourné vers le nord", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.NORD,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers le nord si tourné vers le sud", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.SUD,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers l’est si tourné vers l’ouest", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.OUEST,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(5, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers l’ouest si tourné vers l’est", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.EST,
      new Position(4, 4, 1)
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit monter d’une case vers le haut", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // WHEN
    helicoptere.monter();

    // THEN
    expect(new Position(4, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit descendre d’une case vers le bas", () => {
    // GIVEN
    const helicoptere: ModuleMartien = new Helicoptere(
      Direction.SUD,
      new Position(4, 4, 3)
    );

    // WHEN
    helicoptere.descendre();

    // THEN
    expect(new Position(4, 4, 2)).toStrictEqual(helicoptere.getPosition());
  });
});
