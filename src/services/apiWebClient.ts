import { } from "../types";

const AICLIENT_URL = "http://localhost:8081/api";

// two options: Explore or Use the known 

export async function genNewRecipes () {
   const res = await fetch(`${AICLIENT_URL}/recipes/generate`);
   return await res.json();
}



