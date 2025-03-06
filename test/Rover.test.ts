import { Direction } from "../src/Direction";
import { ModuleMartien } from "../src/ModuleMartien";
import { Position } from "../src/Position";
import { Rover } from "../src/Rover";

describe("Rover", () => {
  it("Initialisation de l’atterissage", () => {
    // WHEN
    const rover: ModuleMartien = new Rover(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers le nord si tourné vers le nord", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers le sud si tourné vers le sud", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.SUD,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers l’ouest si tourné vers l’ouest", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.OUEST,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers l’est si tourné vers l’est", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.EST,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers le sud si tourné vers le nord", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers le nord si tourné vers le sud", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.SUD,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers l’est si tourné vers l’ouest", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.OUEST,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers l’ouest si tourné vers l’est", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.EST,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Ne doit pas monter", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // WHEN
    const monter = () => rover.monter();

    // THEN
    expect(monter).toThrowError("Un rover ne vole pas");
  });

  it("Ne doit pas descendre", () => {
    // GIVEN
    const rover: ModuleMartien = new Rover(
      Direction.NORD,
      new Position(4, 4, 0)
    );

    // WHEN
    const descendre = () => rover.descendre();

    // THEN
    expect(descendre).toThrowError("Un rover ne vole pas");
  });
});
