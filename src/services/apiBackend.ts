import {Recipe} from "../types";

const BASE_URL = "http://localhost:8080";


// CRUD Recipe and Ingredient

async function getRecipes() {
    const res = await fetch(`${BASE_URL}/recipes`);
    return await res.json();
}

async function addRecipe(recipe: Recipe) {
    const response = await fetch(`${BASE_URL}/recipes`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return await response.json();
}

async function deleteRecipeById(id) {
    const response = await fetch(`${BASE_URL}/recipes/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

async function updateRecipeById(id, recipe) {
    const response = await fetch(`${BASE_URL}/recipes/${id}`, {
        method: "PUT",
        body: JSON.stringify(recipe),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return await response.json();
}

export { getRecipes, addRecipe, deleteRecipeById, updateRecipeById };
