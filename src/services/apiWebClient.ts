import { } from "../types";

const AICLIENT_URL = "http://localhost:8081/api";

export async function genNewRecipes() {
   try {
      const res = await fetch(`${AICLIENT_URL}/recipes/generate-recipe`);
      if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
   } catch (error) {
      console.error('Error fetching new recipes:', error);
      throw error;
   }
}



