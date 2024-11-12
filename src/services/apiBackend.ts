import {Recipe} from "../types";

const BASE_URL = "http://localhost:8080";

// CRUD Recipe and Ingredient

async function getRecipes() {
    const res = await fetch(`${BASE_URL}/recipes`);
    console.log(`Status Code: ${res.status}`);
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
    console.log(`Status Code: ${response.status}`);
    return await response.json();
}

async function deleteRecipeById(id: number) {
    const response = await fetch(`${BASE_URL}/recipes/${id}`, {
        method: "DELETE",
    });
    console.log(`Status Code: ${response.status}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

async function updateRecipeById(id: number, recipe: Recipe) {
    const response = await fetch(`${BASE_URL}/recipes/${id}`, {
        method: "PUT",
        body: JSON.stringify(recipe),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    console.log(`Status Code: ${response.status}`);
    return await response.json();
}

export { getRecipes, addRecipe, deleteRecipeById, updateRecipeById };
