import type { GameSummary, Genre, UpdateGame } from "../types";
import GameCard from "./GameCard";

interface Props {
  games: GameSummary[];
  genres: Genre[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: UpdateGame) => void;
}

export default function GameList({ games, genres, onDelete, onUpdate }: Props) {
  return (
    <div className="grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          genres={genres}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
