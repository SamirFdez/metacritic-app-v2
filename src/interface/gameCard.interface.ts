import { Game } from "./metacrticApi.interface";

export interface AnimatedGameCardProps {
  game: Game;
  index: number;
}

export interface GameCardProps {
  game: Game;
}

export interface GameScoreProps {
  score: number
  maxScore: number
}
