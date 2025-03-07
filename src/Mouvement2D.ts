import { Position } from "./Position";

export abstract class Mouvement2D {
  abstract avancer(position: Position): Position;
  abstract reculer(position: Position): Position;
}
