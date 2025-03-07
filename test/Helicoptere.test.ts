import { Direction } from "../src/Direction";
import { Direction3D } from "../src/Direction3D";
import { Helicoptere } from "../src/Helicoptere";
import { ModuleMartien3D } from "../src/interfaces/ModuleMartien3D";
import { Mouvement3D } from "../src/Mouvement3D";
import { MouvementEst } from "../src/MouvementEst";
import { MouvementNord } from "../src/MouvementNord";
import { MouvementOuest } from "../src/MouvementOuest";
import { MouvementSud } from "../src/MouvementSud";
import { Position } from "../src/Position";

describe("Hélicoptère", () => {
  let mouvement3D;

  beforeEach(() => {
    mouvement3D = new Direction3D(new Mouvement3D());
  });

  it("Initialisation de l’atterissage", () => {
    // WHEN
    const mouvementNord = new Direction(new MouvementNord());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementNord,
      new Position(4, 4, 0),
      mouvement3D
    );

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers le nord si tourné vers le nord", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementNord,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers le sud si tourné vers le sud", () => {
    // GIVEN
    const mouvementSud = new Direction(new MouvementSud());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementSud,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit avancer d’une case vers l’ouest si tourné vers l’ouest", () => {
    // GIVEN
    const mouvementOuest = new Direction(new MouvementOuest());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementOuest,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers le sud si tourné vers le nord", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementNord,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers le nord si tourné vers le sud", () => {
    // GIVEN
    const mouvementSud = new Direction(new MouvementSud());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementSud,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers l’est si tourné vers l’ouest", () => {
    // GIVEN
    const mouvementOuest = new Direction(new MouvementOuest());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementOuest,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(5, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit reculer d’une case vers l’ouest si tourné vers l’est", () => {
    // GIVEN
    const mouvementEst = new Direction(new MouvementEst());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementEst,
      new Position(4, 4, 1),
      mouvement3D
    );

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit monter d’une case vers le haut", () => {
    // GIVEN
    const mouvementNord = new Direction(new MouvementNord());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementNord,
      new Position(4, 4, 0),
      mouvement3D
    );

    // WHEN
    helicoptere.monter();

    // THEN
    expect(new Position(4, 4, 1)).toStrictEqual(helicoptere.getPosition());
  });

  it("Doit descendre d’une case vers le bas", () => {
    // GIVEN
    const mouvementSud = new Direction(new MouvementSud());
    const helicoptere: ModuleMartien3D = new Helicoptere(
      mouvementSud,
      new Position(4, 4, 3),
      mouvement3D
    );

    // WHEN
    helicoptere.descendre();

    // THEN
    expect(new Position(4, 4, 2)).toStrictEqual(helicoptere.getPosition());
  });
});
