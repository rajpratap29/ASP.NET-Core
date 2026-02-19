import { useState } from "react";
import type { Genre, CreateGame } from "../types";

interface Props {
  genres: Genre[];
  onCreate: (game: CreateGame) => void;
}

export default function GameForm({ genres, onCreate }: Props) {
  const [name, setName] = useState("");
  const [genreId, setGenreId] = useState<number>(1);
  const [price, setPrice] = useState<number>(1);
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onCreate({
      name,
      genreId,
      price,
      releaseDate,
    });

    setName("");
    setPrice(1);
    setReleaseDate("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Game</h2>

      <input
        placeholder="Game Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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
        required
      />

      <button type="submit">Create</button>
    </form>
  );
}
