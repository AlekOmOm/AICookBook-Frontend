import { Recipe } from "../types";
import { Ingredient } from "../types";

const BASE_URL = "http://localhost:8080";

// CRUD Recipe and Ingredient

export async function getRecipes() {
  const res = await fetch(`${BASE_URL}/recipes`);
  console.log(`Status Code: ${res.status}`);
  return await res.json();
}

export async function addRecipe(recipe: Recipe) {
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

export async function deleteRecipeById(id: number) {
  const response = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: "DELETE",
  });
  console.log(`Status Code: ${response.status}`);
  return await response.json();
}

export async function updateRecipeById(id: number, recipe: Recipe) {
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

// --------- Ingredient ------------

export async function addIngredient(ingredient: Ingredient) {
    const response = await fetch(`${BASE_URL}/ingredients`, {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    console.log(`Status Code: ${response.status}`);
    return await response.json();
}

export async function getIngredients() {
    const res = await fetch(`${BASE_URL}/ingredients`);
    console.log(`Status Code: ${res.status}`);
    return await res.json();
}

export async function getIngredientById(id: number) {
    const res = await fetch(`${BASE_URL}/ingredients/${id}`);
    console.log(`Status Code: ${res.status}`);
    return await res.json();
}

export async function getIngredientsByRecipeId(id: number) {
    const res = await fetch(`${BASE_URL}/ingredients/recipe/${id}`);
    console.log(`Status Code: ${res.status}`);
    return await res.json();
}

export async function updateIngredientById(id: number, ingredient: Ingredient) {
    const response = await fetch(`${BASE_URL}/ingredients/${id}`, {
        method: "PUT",
        body: JSON.stringify(ingredient),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    console.log(`Status Code: ${response.status}`);
    return await response.json();
}

export async function deleteIngredientById(id: number) {
    const response = await fetch(`${BASE_URL}/ingredients/${id}`, {
        method: "DELETE",
    });
    console.log(`Status Code: ${response.status}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

