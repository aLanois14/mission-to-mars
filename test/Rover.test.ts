import { Direction } from "../src/Direction";
import { ModuleMartien2D } from "../src/interfaces/ModuleMartien2D";
import { MouvementEst } from "../src/MouvementEst";
import { MouvementNord } from "../src/MouvementNord";
import { MouvementOuest } from "../src/MouvementOuest";
import { MouvementSud } from "../src/MouvementSud";
import { Position } from "../src/Position";
import { Rover } from "../src/Rover";

describe("Rover", () => {
  it("Initialisation de l’atterissage", () => {
    // WHEN
    const mouvementNord = new Direction(new MouvementNord());
    const rover: ModuleMartien2D = new Rover(
      mouvementNord,
      new Position(4, 4, 0)
    );

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers le nord si tourné vers le nord", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const rover: ModuleMartien2D = new Rover(
      mouvementNord,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers le sud si tourné vers le sud", () => {
    // GIVEN
    const mouvementSud = new Direction(new MouvementSud());
    const rover: ModuleMartien2D = new Rover(
      mouvementSud,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers l’ouest si tourné vers l’ouest", () => {
    // GIVEN
    const mouvementOuest = new Direction(new MouvementOuest());
    const rover: ModuleMartien2D = new Rover(
      mouvementOuest,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit avancer d’une case vers l’est si tourné vers l’est", () => {
    // GIVEN
    const mouvementEst = new Direction(new MouvementEst());
    const rover: ModuleMartien2D = new Rover(
      mouvementEst,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers le sud si tourné vers le nord", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const rover: ModuleMartien2D = new Rover(
      mouvementNord,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers le nord si tourné vers le sud", () => {
    // GIVEN
    const mouvementSud = new Direction(new MouvementSud());
    const rover: ModuleMartien2D = new Rover(
      mouvementSud,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers l’est si tourné vers l’ouest", () => {
    // GIVEN
    const mouvementOuest = new Direction(new MouvementOuest());
    const rover: ModuleMartien2D = new Rover(
      mouvementOuest,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  });

  it("Doit reculer d’une case vers l’ouest si tourné vers l’est", () => {
    // GIVEN
    const mouvementEst = new Direction(new MouvementEst());
    const rover: ModuleMartien2D = new Rover(
      mouvementEst,
      new Position(4, 4, 0)
    );

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  });
});
