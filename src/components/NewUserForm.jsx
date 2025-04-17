import React from "react";

function NewUserForm({ user, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Nom :
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={user.lastname}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          Prénom :
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={user.firstname}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Numéro de téléphone :
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe :
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  );
}

export default NewUserForm;