import React, { useState } from "react";
import { registerUser } from "../services/userService";
import NewUserForm from "../components/NewUserForm";

function NewUser() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const newUser = await registerUser(user);
      setMessage("Utilisateur créé avec succès !");
      setUser({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
      });
      console.log("Nouvel utilisateur :", newUser);
    } catch (err) {
      setError(err.message || "Erreur lors de la création de l'utilisateur.");
      console.error("Erreur lors de la création de l'utilisateur :", err);
    }
  };

  return (
    <div>
      <h2>Créer un nouvel utilisateur</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <NewUserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewUser;
