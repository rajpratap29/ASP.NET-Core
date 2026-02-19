import { useEffect, useState } from "react";
import api from "./api/api";
import type { GameSummary, Genre, CreateGame } from "./types";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import "./styles.css";
import type { UpdateGame } from "./types";


export default function App() {
  const [games, setGames] = useState<GameSummary[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  const loadGames = async () => {
    const res = await api.get("/games");
    setGames(res.data);
  };

  const loadGenres = async () => {
    const res = await api.get("/genres");
    setGenres(res.data);
  };

  const handleUpdate = async (id: number, data: UpdateGame) => {
    await api.put(`/games/${id}`, data);
    loadGames();
  };


  useEffect(() => {
    loadGames();
    loadGenres();
  }, []);

  const handleCreate = async (game: CreateGame) => {
    await api.post("/games", game);
    loadGames();
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/games/${id}`);
    loadGames();
  };

  return (
    <div className="container">
      <h1>🎮 Game Store</h1>
      <GameForm genres={genres} onCreate={handleCreate} />
      <GameList
        games={games}
        genres={genres}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
