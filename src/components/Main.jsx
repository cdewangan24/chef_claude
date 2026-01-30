import React from "react"
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../ai"

export default function Main () {

    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    function addIngredient(formData) {
        const newingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newingredient]);
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
        setRecipe(recipeMarkdown);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="add-ingredient-button">+ Add ingredient</button>
            </form>

            {/* List of ingredients */}
            { ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
                />
            }

            {/* Recipe shown */}
            { recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}