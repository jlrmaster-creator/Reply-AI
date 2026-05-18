import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { subscribeContacts, addContact as addContactService, removeContact as removeContactService, updateContact as updateContactService } from "../services/contactService";

export function useContacts() {
  const { user } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    setError("");
    const unsubscribe = subscribeContacts(
      user.uid,
      (data) => {
        setContacts(data);
      },
      (err) => {
        setError("Error al cargar contactos: " + getErrorMessage(err));
      }
    );
    return unsubscribe;
  }, [user]);

  const MAX = 100;

  const addContact = useCallback(async ({ name, phone, email, city, webpage, occupation, rating, address, nif }) => {
    if (!user) return;
    setError("");
    if (contacts.length >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} contactos. Elimina algunos para añadir más.`);
      return;
    }
    try {
      await addContactService({ name, phone, email, city, webpage, occupation, rating, address, nif }, user.uid);
    } catch (err) {
      setError("Error al añadir contacto: " + getErrorMessage(err));
    }
  }, [user, contacts.length]);

  const removeContact = useCallback(async (id) => {
    setError("");
    try {
      await removeContactService(id);
    } catch (err) {
      setError("Error al eliminar contacto: " + getErrorMessage(err));
    }
  }, []);

  const updateContact = useCallback(async (id, data) => {
    setError("");
    try {
      await updateContactService(id, data);
    } catch (err) {
      setError("Error al actualizar contacto: " + getErrorMessage(err));
    }
  }, []);

  return { contacts, error, addContact, removeContact, updateContact };
}

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado. Revisa las reglas de Firestore.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  if (err.code === "not-found") return "No encontrado";
  if (typeof err === "string") return err;
  return err.message || "Error desconocido";
}
