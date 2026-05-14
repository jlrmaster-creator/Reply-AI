import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { subscribeFavorites, addFavorite as addFavService, removeFavorite as removeFavService } from "../services/favoriteService";

const MAX = 100;

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    setError("");
    const unsub = subscribeFavorites(user.uid, setFavorites, (err) => {
      setError("Error al cargar favoritos: " + getErrorMessage(err));
    });
    return unsub;
  }, [user]);

  const addFavorite = useCallback(async ({ name, url, description }) => {
    if (!user) return;
    setError("");
    if (favorites.length >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} favoritos.`);
      return;
    }
    try {
      await addFavService({ name, url, description }, user.uid);
    } catch (err) {
      setError("Error al añadir favorito: " + getErrorMessage(err));
    }
  }, [user, favorites.length]);

  const removeFavorite = useCallback(async (id) => {
    setError("");
    try {
      await removeFavService(id);
    } catch (err) {
      setError("Error al eliminar favorito: " + getErrorMessage(err));
    }
  }, []);

  return { favorites, error, addFavorite, removeFavorite };
}

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}
