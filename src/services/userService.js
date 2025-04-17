import axiosInstance from './axiosInstance';

export async function fetchAllUsers() {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw error;
    }
}

export async function fetchUser(id) {
    try {
        const response = await axiosInstance.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

export async function createUser(user) {
    try {
        if (!user.email || !user.password) {
            throw new Error('Email et mot de passe sont requis.');
        }
        const response = await axiosInstance.post('/users', user);
        if (response.status !== 201) {
            throw new Error(response.data.message || `Erreur HTTP : ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        if (error.response) {
            console.error('Erreur de réponse du serveur :', error.response.data);
        } else if (error.request) {
            console.error('Erreur de requête :', error.request);
        } else {
            console.error('Erreur :', error.message);
        }
        throw error;
    }
}

export async function updateUser(id, user) {
    try {
        const response = await axiosInstance.put(`/users/${id}`, user);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

export async function deleteUser(id) {
    try {
        const response = await axiosInstance.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la suppression de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

// Fonctions supplémentaires basées sur les relations de l'entité User

export async function fetchUserSubscriptions(id) {
    try {
        const response = await axiosInstance.get(`/users/${id}/subscriptions`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des abonnements de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

export async function fetchUserProducts(id) {
    try {
        const response = await axiosInstance.get(`/users/${id}/products`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des produits de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

export async function fetchUserOrders(id) {
    try {
        const response = await axiosInstance.get(`/users/${id}/orders`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des commandes de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

export async function fetchUserRatings(id) {
    try {
        const response = await axiosInstance.get(`/users/${id}/ratings`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des évaluations de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

// Modification du mot de passe
export async function changePassword(id, password) {
    try {
        const response = await axiosInstance.put(`/users/${id}/password`, password);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification du mot de passe de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

// Modification de l'email
export async function changeEmail(id, email) {
    try {
        const response = await axiosInstance.put(`/users/${id}/email`, email);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification de l'email de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

// Fonction d'inscription (basée sur l'entité User)
export async function registerUser(user) {
    try {
        if (!user.email || !user.password || !user.firstname || !user.lastname || !user.phoneNumber) {
            throw new Error('Email, mot de passe, prénom, nom et numéro de téléphone sont requis.');
        }

        // Convertir l'objet user en JSON
        const userData = JSON.stringify(user);

        const response = await axiosInstance.post('/users', userData, {
            headers: {
                'Content-Type': 'application/json', // En-tête Content-Type
            },
        });

        if (response.status !== 201 && response.status !== 200) {
            throw new Error(response.data.message || `Erreur HTTP : ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription de l\'utilisateur :', error);
        if (error.response) {
            console.error('Erreur de réponse du serveur :', error.response.data);
        } else if (error.request) {
            console.error('Erreur de requête :', error.request);
        } else {
            console.error('Erreur :', error.message);
        }
        throw error;
    }
}
// Fonction pour la modification des rôles (nécessite ROLE_ADMIN)
export async function updateUserRoles(id, roles) {
    try {
        const response = await axiosInstance.put(`/users/${id}/roles`, { roles });
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification des rôles de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}

// Fonction pour activer/désactiver un utilisateur (nécessite ROLE_ADMIN)
export async function updateUserIsActive(id, isActive) {
    try {
        const response = await axiosInstance.put(`/users/${id}/isActive`, { isActive });
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification de l'état actif de l'utilisateur avec l'ID ${id} :`, error);
        throw error;
    }
}