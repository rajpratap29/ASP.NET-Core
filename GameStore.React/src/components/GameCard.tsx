import { useState } from "react";
import type { GameSummary, Genre, UpdateGame } from "../types";

interface Props {
  game: GameSummary;
  genres: Genre[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: UpdateGame) => void;
}

export default function GameCard({ game, genres, onDelete, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(game.name);
  const [genreId, setGenreId] = useState<number>(1);
  const [price, setPrice] = useState(game.price);
  const [releaseDate, setReleaseDate] = useState(
    game.releaseDate.split("T")[0],
  );

  const handleSave = () => {
    onUpdate(game.id, {
      name,
      genreId,
      price,
      releaseDate,
    });

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="card">
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <select
          value={genreId}
          onChange={(e) => setGenreId(Number(e.target.value))}
        >
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>{game.name}</h3>
      <p className="genre">{game.genre}</p>
      <p>₹ {game.price}</p>
      <p>{new Date(game.releaseDate).toDateString()}</p>

      <div className="card-actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(game.id)}>Delete</button>
      </div>
    </div>
  );
}
